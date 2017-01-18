import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import EditFormContainer from './edit_form_container';

const customStyles = {
  content : {
    top                   : '55%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ReservationItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleProfileClick = this.handleProfileClick.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  componentWillMount() {
    Modal.setAppElement('body');
 }

 closeModal() {
    this.setState({modalIsOpen: false});
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  componentWillReceiveProps(newProps) {
    if (newProps.errors.length === 0) {
      this.closeModal();
    }
  }

  calculateDate(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    let newDate = new Date(date);
    return monthNames[newDate.getMonth()] + " " + newDate.getDate() + ", " + newDate.getFullYear();
  }

  handleProfileClick() {
    alert('user profiles coming soon');
    // this.props.router.push(`users/${this.props.reservation.host_id}`);
  }

  render() {
    const {user, site_id, site_name, check_in_date, check_out_date, host_image_url, host_id} = this.props.reservation;
    const site_main_image = this.props.reservation.site_main_image || "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484527141/Logomakr_7iM8J2_xwg0qw.png";
    if (this.props.reservation) {
      return (
        <ul className="reservation">
          <img className="site-main-image" src={site_main_image} />
          <div className="reservation-details">

            <div className="display-dates">
              <li>{this.calculateDate(check_in_date)} - {this.calculateDate(check_out_date)}</li>
            </div>
            <li><h3>{site_name}</h3></li>

            <li className="reservation-link">
              <Link to={`sites/${site_id}`}>Site Info</Link>
            </li>
            <br/>
          </div>
          <button className="reservation-edit-button" onClick={() => this.openModal()}>Edit Reservation</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            style={customStyles}>
            <div>
              <EditFormContainer
                key={this.props.reservation.id}
                reservation={this.props.reservation}
                closeModal={this.closeModal}/>
            </div>
          </Modal>
          <button className="reservation-delete-button" onClick={() => this.props.deleteReservation(this.props.reservation.id)}>Cancel Reservation</button>
        </ul>
      );
    }
      return (<div></div>);

  }
}

export default withRouter(ReservationItem);
