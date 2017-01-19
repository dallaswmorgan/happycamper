import React from 'react';


class SiteImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload() {
    let that= this;
    cloudinary.openUploadWidget(window.cloudinary_options, function(error, results){
      if(!error){
        const newImage = results[0].secure_url;
        that.props.updateUser({
          email: that.props.currentUser.email,
          id: that.props.currentUser.id,
          image_url: newImage});
      }
    });
  }

  render() {
    return (
        <button id="add-user-pic"onClick={() => this.upload()}>Update Profile Photo</button>
    );
  }
}

export default SiteImageForm;
