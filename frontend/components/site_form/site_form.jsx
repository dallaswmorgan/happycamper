import React from 'react';
import { withRouter } from 'react-router';

class SiteForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      user_id: this.props.currentUser.id,
      featured: false,
      public: false,
      state: "",
      city: "",
      price: "",
      guest_limit:"",
      lat: "",
      lng: ""
    };
  }

  navigateToHome() {
    this.props.router.push('/');
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // handleCloudinary(e) {
  //   e.preventDefault();
  //   cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
  //     if(error) {
  //       console.log(error);
  //     } else {
  //       console.log(results[0].secure_url);
  //     }
  //   });
  // }

  render() {
    const { name, description, featured, state, city, price, guest_limit } = this.state;

    return(
      <div className="new-site-container">
        <div className="new-site-form">
          <h3 className="new-site-title">List your Campsite</h3>
          <form onSubmit={this.handleSubmit}>

            <label className="site-field">Name of Campsite
              <input type="text" value={name}
                onChange={this.update("name")} className="site-field"/>
            </label>

            <label className="site-field">Description
              <input type="text" value={description}
                onChange={this.update("description")} className="site-field"/>
            </label>

            <label className="site-field">State
              <select>
              	<option value="AL">Alabama</option>
              	<option value="AK">Alaska</option>
              	<option value="AZ">Arizona</option>
              	<option value="AR">Arkansas</option>
              	<option value="CA">California</option>
              	<option value="CO">Colorado</option>
              	<option value="CT">Connecticut</option>
              	<option value="DE">Delaware</option>
              	<option value="DC">District Of Columbia</option>
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
              </select>
            </label>

            <label className="site-field">City
              <input type="text" value={city}
                onChange={this.update("city")} className="site-field"/>
            </label>

            <label className="site-field">Price
              <input type="text" value={price}
                onChange={this.update("price")} className="site-field"/>
            </label>

            <label className="site-field">Guest Limit
              <input type="text" value={guest_limit}
                onChange={this.update("guest_limit")} className="site-field"/>
            </label>

            <div className="site-button-holder">
              <button
                onClick={this.handleCloudinary}
                className="new-site-button">
                Add Images
              </button>
            </div>

            <div className="site-button-holder">
              <button
                className="new-site-button"
                onClick={this.navigateToHome}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SiteForm);
