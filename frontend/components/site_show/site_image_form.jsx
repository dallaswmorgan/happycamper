import React from 'react';


class SiteImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {
        image_url: "",
        site_id: ""
      }
    };
    this.upload = this.upload.bind(this);
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options, function(error, results){
      if(!error){
        console.log(results);
      }
    });
  }

  render() {
    return (
      <div className="photo-upload-form">
        <button onClick={this.upload}>Add image</button>
      </div>
    );
  }
}

export default SiteImageForm;
