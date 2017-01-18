import React from 'react';
import { withRouter } from 'react-router';
import SiteImageForm from './site_image_form';

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
  }

  // componentWillReceiveProps(newProps) {
  //   debugger;
  // }

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

    return(
      <form onSubmit={this.handleCreateSubmit}>
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
        <label className="num-guests">Number of Guests
          <select
            onChange={this.update("number_of_guests")}
            className="reservation-input">
            <option value="" disabled defaultValue>Number of campers</option>
            {guestOptions.map(option => option)}
          </select>
        </label>
        <input
          className="submit-reservation"
          type="submit"
          value="Make a Reservation" />
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
      let {name, description, site_images } = this.props.site;
      // Adding default pic if no pics added yet
      if (site_images.length === 0) {
        site_images = [{id: 1, url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484527141/Logomakr_7iM8J2_xwg0qw.png", caption: "Default pic"}];
      }
      return (
        <div className="site-show">
          <div className="site-images-box">
            <ul className="site-images-list">
              {site_images.map(image =>
                <li className="site-image-li" key={`image-${image.id}`} >
                  <img
                    className="site-image"
                    src={image.url}
                    alt={image.caption}/>
                </li>
              )}
            </ul>
          </div>
          <div className="site-info">
            <SiteImageForm site={this.props.site} createImage={this.props.createImage}/>
            <div className="site-text">
                <h1>{name}</h1>

                <h3>{description}</h3>
            </div>

            <div className="reservation-box">
              {this.reservationForm()}
            </div>
          </div>

        </div>
      );
    } else
    return(<div></div>);
  }
}

export default withRouter(Site);
