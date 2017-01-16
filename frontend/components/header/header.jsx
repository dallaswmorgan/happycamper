import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';

// const logo = <img  className="logo" onClick={() => this.props.router.push('/')}
  // src="https://res.cloudinary.com/dallaswmorgan/image/upload/v1484108260/Logomakr_2cxses_s2xnv1.png"/>;

const searchBar = (
  <div className="search-bar-box">
    <i className="fa fa-search" aria-hidden="true"></i>
    <input className="search-bar" type="text" placeholder="Search"/>
  </div>);

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
    this.logo = <img  className="logo" onClick={() => this.props.router.push('/')}
      src="https://res.cloudinary.com/dallaswmorgan/image/upload/v1484108260/Logomakr_2cxses_s2xnv1.png"/>;
    this.handleListRequest = this.handleListRequest.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  // Modal Management
  openModal(formType) {
    this.setState({ modalIsOpen: true , formType});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && nextProps.loggedIn !== this.props.loggedIn) {
      this.closeModal();
    }
  }


  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.clearErrors();
  }


  componentWillMount() {
    Modal.setAppElement('body');
  }


  toggleModal() {
    this.props.clearErrors();
    if (this.state.formType === "login") {
      this.setState({ formType: "signup" });
    } else {
      this.setState({ formType: "login" });
    }
  }

  handleGuestLogin() {
    const guest = { email: "guest@happycamper.camp", password: "camphappy"};
    this.props.login(guest);
  }

  handleLogout() {
    this.props.logout();
  }

  handleListRequest() {
    this.props.router.push('sites/new');
  }

  handleReservationsRequest() {
    alert("Come back soon for the ability to reserve campsites!");
  }

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
                    <button id="logout" onClick={this.handleLogout}>Log Out</button>
                  </li>
                </ul>
            </ul>
          </li>
        </ul>

      </div>
    );
  }

  render() {
    const buttons = this.props.loggedIn ? this.loggedInButtons() : this.loggedOutButtons();
    return(
      <div className="nav-bar">
          <nav className="logo-search-box">
            {this.logo}
            {searchBar}
          </nav>
            {buttons}
      </div>
    );
  }



}

export default withRouter(Header);
