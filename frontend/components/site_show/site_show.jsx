import React from 'react';
import { withRouter } from 'react-router';
import { StickyContainer, Sticky } from 'react-sticky';
import SiteImageForm from './site_image_form';
import SiteAmenities from './site_amenities';
import ReviewsContainer from '../reviews/reviews_container';
import Stars from 'react-stars';
import Forecast from 'react-forecast';

class Site extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      site_id: this.props.siteId,
      check_in_date: "",
      check_out_date: "",
      number_of_guests: ""
    };
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
  }

  componentWillMount() {
    let siteId = parseInt(this.props.params.id);
    this.props.fetchSite(siteId);
    this.props.fetchReviews(siteId);
  }


  handleCreateSubmit(e) {
    e.preventDefault();
    const reservation = this.state;
    reservation.number_of_guests = parseInt(reservation.number_of_guests);
    this.props.createReservation(reservation).then(this.props.router.push('reservations'));
  }

  renderErrors() {
  if (this.props.errors.length !== 0) {
    return(
      <ul className="reservation-errors">
        {this.props.errors.map((error, i) => (
          <li  key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  } else {
    return (<div></div>);
  }
}

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  reservationForm() {
    // users cannot select a date before current date
    let today = new Date();
    let dd = today.getDate();
    if (dd < 10 ) {
      dd = '0' + dd;
    }
    let mm = today.getMonth() + 1;
    if (mm < 10) {
      mm = '0' + mm;
    }
    let yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;

    // number of guests is limited to guest limit of site
    const guestLimit = (this.props.site.guest_limit);
    let guestOptions = [];
    for(let i = 1; i < guestLimit + 1; i++) {
      guestOptions.push(
        <option value={i} key={`guest-option-${i}`}>{i}</option>
      );
    }

    let reservationButton;
    if (this.props.currentUser) {
      reservationButton = <button id="reservation-submit-button"
                            onClick={this.handleCreateSubmit}
                            className="submit-reservation">
                            Reserve Site
                          </button>;
    } else {
      reservationButton = <h3>Login to reserve site</h3>;
    }

    return(
      <form className='site-reservation-form'onSubmit={this.handleCreateSubmit}>
        {this.renderErrors()}
        <div className="dates">
          <label className="reservation-category">Check In
            <input
              onChange={this.update("check_in_date")}
              className="reservation-input"
              type="date"
              min={today}>
            </input>
          </label>

          <label className="reservation-category">Check Out
            <input
              onChange={this.update("check_out_date")}
              className="reservation-input"
              type="date"
              min={this.state.check_in_date}>
            </input>
          </label>
        </div>

        <div className='num-guests'>
          <label className="reservation-category">Number of Guests
            <select
              onChange={this.update("number_of_guests")}
              className="guest-input">
              <option value="" disabled defaultValue>Number of campers</option>
              {guestOptions.map(option => option)}
            </select>
          </label>
        </div>

        <div className='reservation-submit'>
          {reservationButton}
        </div>

      </form>
    );
  }

  siteImageForm() {
    return(
      <SiteImageForm site={this.props.site}/>
    );
  }



  render() {
    if (this.props.site) {
      let {name, description, site_images, city, state, average_review, lat, lng } = this.props.site;
      // Adding default pic if no pics added yet
      if (site_images.length === 0) {
        site_images =
          [{id: 1,
            url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484527141/Logomakr_7iM8J2_xwg0qw.png",
            caption: "Default pic"}];
      }

      // Will not display stars if no rating yet
      const stars = average_review === 0 ? <div></div> :
        <Stars
          className="stars"
          count={5}
          size={25}
          value={average_review}
          color1={'lightgray'}
          color2={'#28BC8C'}
          edit={false} />;
      return (
        <div className="site-show">
          <div className="site-top">
            <div className="site-images-box">
              <ul className="site-images-list">
                {site_images.map(image =>
                  <li className="site-image-li" key={`image-${image.id}`} >
                    <div className="site-image-box">
                      <img
                        className="site-image"
                        src={image.url}
                        alt={image.caption}/>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className='site-bottom'>
            <div className='site-bottom-left'>
              <div className="site-info">
                <div className="site-text">
                  <div className="site-text-top">
                    <div className="title-location">
                      <h1>{name}</h1>
                      {stars}
                      <h3>{`Near ${city}, ${state}`}</h3>
                    </div>
                    <SiteImageForm site={this.props.site}
                      createImage={this.props.createImage}/>
                  </div>
                  <Forecast latitude={lat} longitude={lng} name={name}/>
                  <h3 className="site-description">{description}</h3>
                </div>
                <SiteAmenities site={this.props.site} currentUser={this.props.currentUser}
                  updateAmenity={this.props.updateAmenity}/>
              </div>
              <ReviewsContainer site={this.props.site}/>
            </div>
            <StickyContainer className='site-bottom-right'>
                <Sticky className="reservation-box">
                  <div className="price-box">
                    <h1>{`$${this.props.site.price} per night`}</h1>
                  </div>
                  {this.reservationForm()}
                </Sticky>
            </StickyContainer>
          </div>
        </div>
      );
    } else
    return(<div></div>);
  }
}

export default withRouter(Site);
