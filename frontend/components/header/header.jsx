import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
import UserImageForm from './user_image_form';
import FontAwesome from 'react-fontawesome';

// const logo = <img  className="logo" onClick={() => this.props.router.push('/')}
  // src="https://res.cloudinary.com/dallaswmorgan/image/upload/v1484108260/Logomakr_2cxses_s2xnv1.png"/>;

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


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      formType: "login"
    };

    this.handleListRequest = this.handleListRequest.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.geolocate = this.geolocate.bind(this);
    this.initAutocomplete = this.initAutocomplete.bind(this);
    this.updateLocation = this.updateLocation.bind(this);

    this.logo = <img  className="logo" onClick={() => this.props.router.push('/')}
      src="https://res.cloudinary.com/dallaswmorgan/image/upload/v1484108260/Logomakr_2cxses_s2xnv1.png"/>;

    this.searchBar = (
      <div className="search-bar-box">
        <FontAwesome
            className='fa-search fa'
            name="search"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.5)' }}
          />
        <input
          onFocus={this.geolocate()}
          id="autocomplete"
          className="searchbar"
          placeholder="Search for campsites near..."/>
      </div>);
  }
  // Lifecycle methods
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && nextProps.loggedIn !== this.props.loggedIn) {
      this.closeModal();
    }
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }
  componentDidMount() {
    this.initAutocomplete();
  }

  // Button helpers
  handleGuestLogin() {
    const guest = { email: "guest@happycamper.camp", password: "camphappy"};
    this.props.login(guest);
  }

  handleLogout() {
    this.props.logout().then(hashHistory.replace('/'));
  }

  handleListRequest() {
    this.props.router.push('sites/new');
  }

  handleReservationsRequest() {
    this.props.router.push('reservations');
  }

  // Modal Management
  openModal(formType) {
    this.setState({ modalIsOpen: true , formType});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.clearErrors();
  }

  toggleModal() {
    this.props.clearErrors();
    if (this.state.formType === "login") {
      this.setState({ formType: "signup" });
    } else {
      this.setState({ formType: "login" });
    }
  }

  // Modal holds signup or login form depending on input from openModal
  sessionModal() {
    return(
      <Modal
        isOpen={this.state.modalIsOpen}
        contentLabel="Modal"
        onRequestClose={() => this.closeModal()}
        style={modalStyle}>
        <div className="auth-modal-container">
          <SessionFormContainer
            formType={this.state.formType}
            openModal={this.openModal}/>
        </div>
        {this.loginButtons()}
      </Modal>
    );
  }

  // Buttons within Modal
  loginButtons() {
    if (this.state.formType==="login") {
      return(
        <div className="toggle-modal-box">
          <h4>{"Not a member yet?"}</h4>
          <button
            className="login-button"
            onClick={() => this.toggleModal()}>Sign up</button>
          <button
            className="login-button"
            onClick={() => this.handleGuestLogin()}>Log in as Guest</button>
        </div>
      );
    } else {
      return(
        <div className="toggle-modal-box">
          <h4>{"Already a member?"}</h4>
            <button
              className="login-button"
              onClick={() => this.toggleModal()}>Log in</button>
            <button
              className="login-button"
              onClick={() => this.handleGuestLogin()}>Log in as Guest</button>
        </div>
      );
    }
  }

  // Buttons on the nav bar
  loggedOutButtons() {
    return(
      <div className="nav">
        <button className="nav-button"
          onClick={() => this.openModal("signup")}>Sign up</button>
        <button className="nav-button"
          onClick={() => this.openModal("login")}>Log in</button>
        {this.sessionModal()}
        <button className="nav-button"
          onClick={() => this.handleGuestLogin()}>Log in as Guest</button>
      </div>
    );
  }

  loggedInButtons() {
    return(
      <div className="nav">
        <button className="nav-button"
          onClick={this.handleListRequest}>List a Campsite</button>
        <button className="nav-button"
          onClick={() => this.handleReservationsRequest()}>My Reservations</button>
        <ul className="user-info-box">

          <li id="user-name">
            {this.props.currentUser.fname}
          </li>
          <li>
            <ul className="header-list">
              <li id="user-icon">
                <img src={this.props.currentUser.image_url}/>
              </li>
                <ul id="user-dropdown">
                  <li>
                    <UserImageForm
                      updateUser={this.props.updateUser}
                      currentUser={this.props.currentUser}/>
                  </li>
                  <li>
                    <button id="logout" onClick={this.handleLogout}>Log Out</button>
                  </li>
                </ul>
            </ul>
          </li>
        </ul>

      </div>
    );
  }

  // handling Google Maps for search

  initAutocomplete() {
    let autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        {types: ['geocode']});
    autocomplete.addListener('place_changed', this.updateLocation);
    this.autocomplete = autocomplete;
  }

  updateLocation() {
    let lat = this.autocomplete.getPlace().geometry.location.lat();
    let lng = this.autocomplete.getPlace().geometry.location.lng();
    let latlng = {
      lat: lat,
      lng: lng
    };
    // debugger;
    this.props.updateFilter('center', latlng);
    this.props.router.replace('sites');
    // this.setState({ center: latlng });
    // this.props.receiveCenter(latlng);
  }
  //
  geolocate() {
    let that = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }

  render() {
    const buttons = this.props.loggedIn ? this.loggedInButtons() : this.loggedOutButtons();
    return(
      <div className="nav-bar">
          <nav className="logo-search-box">
            {this.logo}
            {this.searchBar}
          </nav>
            {buttons}
      </div>
    );
  }



}

export default withRouter(Header);
