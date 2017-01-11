import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';

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
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  // Modal Management
  openModal(formType) {
    this.setState({ modalIsOpen: true, formType });
  }

  closeModal() {
    console.log("trying to close modal");
    this.setState({modalIsOpen: false});
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  render() {
    const logo = "Happy Camper!";
    const searchBar = "Search Bar";
    return(
      <div className="nav-bar">
          {logo}
          {searchBar}
          <button className="logged-out-button"
            onClick={() => this.openModal("signup")}>Sign up</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            contentLabel="Modal"
            onRequestClose={this.closeModal}
            style={modalStyle}>
            <div className="auth-modal-container">
              <SessionFormContainer
                formType={this.state.formType}/>
            </div>
          </Modal>
      </div>
    );
  }



}

export default withRouter(Header);
