import React from 'react';
import { withRouter } from 'react-router';

class SiteForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      user_id: props.currentUser.id,
      region_id: 2,
      featured: false,
      public: false,
      state: "",
      city: "",
      price: "",
      guest_limit:"",
      lat: "37.574515",
      lng: "-122.310791"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToHome = this.navigateToHome.bind(this);
  }

  navigateToHome() {
    this.props.router.push('/');
  }

  update(field) {
    console.log(this.state);
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleCloudinary(e) {
    console.log('trying cloudinary');
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(error) {
        console.log(error);
      } else {
        console.log(results[0].secure_url);
      }
    });
  }

  handleSubmit(e) {
    console.log('submitting');

    e.preventDefault();
    let site = Object.assign({}, this.state);
    site.lat = parseFloat(site.lat);
    site.lng = parseFloat(site.lng);
    site.price = parseInt(site.price);
    site.guest_limit = parseInt(site.guest_limit);
    this.props.createSite(site);
  }

  render() {
    const { name, description, featured, state, city, price, guest_limit } = this.state;

    return(
      <div className="new-site-container">
        <div className="new-site-form">
          <form onSubmit={this.handleSubmit}>

              <input type="text" value={name} placeholder="Name of campsite"
                onChange={this.update("name")} className="site-field"/>

              <input type="text" value={city} placeholder="City"
                onChange={this.update("city")} className="site-field"/>

              <input type="textarea" value={state} placeholder="State (eg 'CA')"
                onChange={this.update("state")} className="site-field"/>

              <input type="text" value={price} placeholder="Price per night"
                onChange={this.update("price")} className="site-field"/>

              <input type="text" value={guest_limit} placeholder="Guest limit"
                onChange={this.update("guest_limit")} className="site-field"/>

              <input type="textarea" value={description} placeholder="Description"
                onChange={this.update("description")} className="site-field"/>


            <div className="site-button-holder">
              <button
                onClick={this.handleCloudinary}
                className="new-site-button">
                Add Images
              </button>
              <button
                onClick={this.handleGoogleMaps}
                id="add-images-button"
                className="new-site-button">
                Add Location
              </button>
            </div>

            <div className="site-button-holder">
              <input type="submit" value="List Site"/>
              <button
                className="new-site-button"
                onClick={this.navigateToHome}>
                Cancel
              </button>
            </div>
          </form>
        </div>
        <h1>Help People Meet Nature</h1>
        <h3>List your site today</h3>
      </div>
    );
  }
}

export default withRouter(SiteForm);
