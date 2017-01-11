import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';

const logo = <img  className="logo"
  src="http://res.cloudinary.com/dallaswmorgan/image/upload/v1484108260/Logomakr_2cxses_s2xnv1.png"/>;
const searchBar = <input type="text" placeholder="Search"/>;

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
    this.toggleModal = this.toggleModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  // Modal Management
  openModal(formType) {
    this.setState({ modalIsOpen: true, formType: formType });
  }

  componentWillReceiveProps(props) {
    if (props.loggedIn) {
      this.closeModal();
    }
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  loggedOutNav() {

  }

  toggleModal() {
    this.closeModal();
    let newForm;
    if (this.state.formType === "login") {
      this.setState({ formType: "signup" }, () => this.openModal("signup"));
    } else {
      this.setState({ formType: "login" }, () => this.openModal("login"));
    }
  }

  loginButtons() {
    if (this.state.formType==="login") {
      return(
        <div className="login-buttons-box">
          <p>{"Not a member yet?"}</p>
          <button
            className="login-button"
            onClick={() => this.toggleModal()}>Sign up!</button>
        </div>
      );
    } else {
      return(
        <div className="login-buttons-box">
          <p>{"Already a member?"}</p>
          <button
            className="login-button"
            onClick={() => this.toggleModal()}>Sign in!</button>
        </div>
      );
    }
  }

  render() {
    return(
      <div className="nav-bar">
          {logo}
          {searchBar}
          <button className="logged-out-button"
            onClick={() => this.openModal("signup")}>Sign up</button>
          <button className="logged-out-button"
            onClick={() => this.openModal("login")}>Log in</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            contentLabel="Modal"
            onRequestClose={this.closeModal}
            style={modalStyle}>
            <div className="auth-modal-container">
              <SessionFormContainer
                formType={this.state.formType}
                openModal={this.openModal}/>
            </div>
            {this.loginButtons()}
          </Modal>
      </div>
    );
  }



}

export default withRouter(Header);
