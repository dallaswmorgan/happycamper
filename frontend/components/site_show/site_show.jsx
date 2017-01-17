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

  componentDidMount() {
    let siteId = parseInt(this.props.params.id);
    this.props.fetchSite(siteId);
  }

  handleCreateSubmit(e) {
    e.preventDefault();
    const reservation = this.state;
    reservation.number_of_guests = parseInt(reservation.number_of_guests);
    console.log(this.props.createReservation);
    console.log(reservation);
    this.props.createReservation(reservation);
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
    return(
      <form onSubmit={this.handleCreateSubmit}>
        {this.renderErrors()}
        <div className="dates">
        <label className="reservation-category">Check In
          <input
            onChange={this.update("check_in_date")}
            className="reservation-input"
            type="date">
          </input>
        </label>
        <label className="reservation-category">Check Out
          <input
            onChange={this.update("check_out_date")}
            className="reservation-input"
            type="date">
          </input>
        </label>
        </div>
        <label className="num-guests">Guests
          <select
            onChange={this.update("number_of_guests")}
            className="reservation-input">
            <option value="" disabled selected>Select guests</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
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
                <li className="site-image-li" key={`image-${image.id}`}>
                  <img
                    className="site-image"
                    src={image.url}
                    alt={image.caption}/>
                </li>
              )}
            </ul>
          </div>

          <div className="show-text">
              <h1>{name}</h1>

              <h3>{description}</h3>
          </div>

          <div className="make-reservation-box">
            {this.reservationForm()}
          </div>

        </div>
      );
    } else
    return(<div></div>);
  }
}

export default withRouter(Site);
