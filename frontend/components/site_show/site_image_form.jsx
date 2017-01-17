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

  upload(id) {
    // e.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options, function(error, results){
      if(!error){
        const newImage = { image_url: results[0].secure_url, site_id: id};
        console.log(newImage);
      }
    });
  }

  render() {
    // debugger;
    return (
      <div className="photo-upload-form">
        <button onClick={() => this.upload(this.props.site.id)}>Add image</button>
      </div>
    );
  }
}

export default SiteImageForm;
