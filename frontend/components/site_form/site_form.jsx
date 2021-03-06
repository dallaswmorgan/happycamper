import React from 'react';
import { withRouter } from 'react-router';
import SiteMap from '../site_map/site_map';
import Modal from 'react-modal';

const modalStyle = {
  content : {
    top                   : '55%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};

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
      price: 50,
      guest_limit: 6,
      lat: "",
      lng: "",
      modalIsOpen: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToHome = this.navigateToHome.bind(this);
    this.getAddressFromCoords = this.getAddressFromCoords.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    let _mapOptions = {
      center: {lat: 37.773972, lng: -122.431297}, // San Francisco coords
      zoom: 7,
      mapTypeId: 'terrain'
    };
    this.map = new google.maps.Map(this.mapNode, _mapOptions);
    this.geocoder = new google.maps.Geocoder;
    this.marker = new google.maps.Marker({
      position: {lat: 37.773972, lng: -122.431297},
      draggable: true,
      map: this.map,
      title: "Place marker on campsite location"
    });
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

  getAddressFromCoords(coords, resolve, reject) {
    let city;
    let state;
    let addressArray;
    let that = this;
  }

  handleSubmit(e) {
    e.preventDefault();
    let site = Object.assign({}, this.state);
    site.price = parseInt(site.price);
    site.guest_limit = parseInt(site.guest_limit);
    site.lat = this.marker.position.lat();
    site.lng = this.marker.position.lng();
    const coords = {lat: site.lat, lng: site.lng};

    // pulling out city and state from coords. Beware when refactoring
    // as geocoder is asynch
    // let that = this;
    // this.geocoder.geocode({'location': coords}, (results, status) => {
    //   if (status === 'OK') {
    //     if (results[1]) {
    //       let address = results[1].address_components;

          // Parsing out city and state from varying map specificity
    //       if (address.length >= 5) {
    //         site.city = address[1];
    //         site.state = address[3];
    //       } else if (address.length === 3) {
    //         site.city = address[0].long_name;
    //         site.state = address[1].short_name;
    //       } else if (address.length === 4) {
    //         site.city = address[1].long_name;
    //         site.state = address[2].short_name;
    //       } else {
    //         site.city = address[0];
    //         site.state = address[1];
    //       }
    //
    //       // creating the site
    //       site.city = site.city.long_name;
    //       site.state = site.state.long_name;
    //     }
    //   } else {
    //     window.alert(`Google maps failed to recognize location. Please update location and try again`);
    //   }
    // });
          this.props.createSite(site).then( newSite => (
            this.props.router.replace(`/sites/${newSite.id}`)));
  }

  render() {
    const { name, description, featured, state, city, price, guest_limit } = this.state;

    return(
      <div className="new-site-container">
        <div className="new-site-form">
          <form onSubmit={this.handleSubmit}>
            <div className="site-form-info">

              <input type="text" value={name} placeholder="Name of campsite"
                onChange={this.update("name")} className="site-field"/>

              <div className="price-guest">
                <label className="price">
                  Price per night
                  <input type="number" value={price}
                    onChange={this.update("price")} className="site-field" min={5} max={300} step={5}/>
                </label>
                <label className="guest">
                  Guest Limit
                  <input type="number" value={guest_limit}
                    onChange={this.update("guest_limit")} className="site-field" min={1} max={15}/>
                </label>

              </div>

              <div className="description-holder">

                <textarea
                  className='site-form-description'
                  name={this.description}
                  cols='40'
                  rows='5'
                  value={description}
                  onChange={this.update("description")}
                  placeholder="Description (3-5 sentences)">

                </textarea>
              </div>

            <div className="site-button-holder">
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
          </div>
          </form>
          <div className="site-form-map">
            <h2 id="map-label">Place marker on site location</h2>
            <div id="form-map-container" ref={ map => this.mapNode = map }>Map</div>
          </div>
        </div>
        <h1>Help People Meet Nature</h1>
        <h3>List your site today</h3>
      </div>
    );
  }
}

export default withRouter(SiteForm);
