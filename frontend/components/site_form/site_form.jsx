import React from 'react';
import { withRouter } from 'react-router';

class SiteForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      region_id: 2,
      featured: false,
      public: false,
      state: "",
      city: "",
      price: "",
      guest_limit:"",
      lat: "37.574515",
      lng: "-122.310791",
      modalIsOpen: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToHome = this.navigateToHome.bind(this);
  }

  navigateToHome() {
    this.props.router.push('/');
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleCloudinary(e) {
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

    e.preventDefault();
    let site = Object.assign({}, this.state);
    site.lat = parseFloat(site.lat);
    site.lng = parseFloat(site.lng);
    site.price = parseInt(site.price);
    site.guest_limit = parseInt(site.guest_limit);
    this.props.createSite(site).then( newSite => this.props.router.replace(`/sites/${newSite.id}`));
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

              <input type="text" value={state} list="states" placeholder="State"
                onChange={this.update("state")} className="site-field"/>
              <datalist id="states">
                <option value="AL">Alabama</option>
              	<option value="AK">Alaska</option>
              	<option value="AZ">Arizona</option>
              	<option value="AR">Arkansas</option>
              	<option value="CA">California</option>
              	<option value="CO">Colorado</option>
              	<option value="CT">Connecticut</option>
              	<option value="DE">Delaware</option>
              	<option value="DC">District of Columbia</option>
              	<option value="FL">Florida</option>
              	<option value="GA">Georgia</option>
              	<option value="HI">Hawaii</option>
              	<option value="ID">Idaho</option>
              	<option value="IL">Illinois</option>
              	<option value="IN">Indiana</option>
              	<option value="IA">Iowa</option>
              	<option value="KS">Kansas</option>
              	<option value="KY">Kentucky</option>
              	<option value="LA">Louisiana</option>
              	<option value="ME">Maine</option>
              	<option value="MD">Maryland</option>
              	<option value="MA">Massachusetts</option>
              	<option value="MI">Michigan</option>
              	<option value="MN">Minnesota</option>
              	<option value="MS">Mississippi</option>
              	<option value="MO">Missouri</option>
              	<option value="MT">Montana</option>
              	<option value="NE">Nebraska</option>
              	<option value="NV">Nevada</option>
              	<option value="NH">New Hampshire</option>
              	<option value="NJ">New Jersey</option>
              	<option value="NM">New Mexico</option>
              	<option value="NY">New York</option>
              	<option value="NC">North Carolina</option>
              	<option value="ND">North Dakota</option>
              	<option value="OH">Ohio</option>
              	<option value="OK">Oklahoma</option>
              	<option value="OR">Oregon</option>
              	<option value="PA">Pennsylvania</option>
              	<option value="RI">Rhode Island</option>
              	<option value="SC">South Carolina</option>
              	<option value="SD">South Dakota</option>
              	<option value="TN">Tennessee</option>
              	<option value="TX">Texas</option>
              	<option value="UT">Utah</option>
              	<option value="VT">Vermont</option>
              	<option value="VA">Virginia</option>
              	<option value="WA">Washington</option>
              	<option value="WV">West Virginia</option>
              	<option value="WI">Wisconsin</option>
              	<option value="WY">Wyoming</option>
              </datalist>

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
              <br/>
              <button
                className="new-site-button"
                onClick={this.handleSubmit}>
                List Site
              </button>
              <button
                className="new-site-button"
                onClick={this.navigateToHome}>
                Cancel
              </button>
            </div>

            <div className="site-button-holder">
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
