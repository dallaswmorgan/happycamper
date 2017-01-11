import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      formType: "login"
    };
  }
  // Modal Management
  openModal(formType) {
    this.setState({ modalOpen: true, formType });
  }

  closeModal() {
    this.setState({modelOpen: false});
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
          <SessionFormContainer
            formType={this.state.formType}
            closeModal={this.closeModal}
            modalOpen={this.state.modalOpen}/>
      </div>
    );
  }



}

export default withRouter(Header);
