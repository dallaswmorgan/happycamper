import React from 'react';
import { Link, withRouter } from 'react-router';

class ReservationEditForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id:this.props.reservation.id,
			site_id: this.props.reservation.site_id,

			check_in_date: this.props.reservation.check_in_date,
      check_out_date: this.props.reservation.check_out_date,
			number_of_guests: this.props.reservation.number_of_guests
		};
		this.edited = false;
		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const reservation = this.state;
		this.props.updateReservation(reservation).then(this.props.closeModal);
	}

	renderErrors() {
		if (this.props.errors.length !== 0) {

			return(
				<ul className="errors">
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

	render() {
		const guestLimit = (this.props.reservation.guest_limit);
    let guestOptions = [];
    for(let i = 1; i < guestLimit + 1; i++) {
      guestOptions.push(
        <option value={i} key={`guest-option-${i}`}>{i}</option>
      );
    }
    return (
      <div className="reservation-edit-form-container">
  			<div className="group">
  				<button id="close" onClick={this.props.closeModal}>close</button>
  			</div>
        <form onSubmit={this.handleSubmit} className="reservation-edit-form-box">
  				<img id="edit-logo" src="https://res.cloudinary.com/dallaswmorgan/image/upload/v1484108260/Logomakr_2cxses_s2xnv1.png"/>
          {this.renderErrors()}
          <div className="reservation-edit-form">
            <label> <span>*</span> Check In
							<br/>
              <input type="date"
								value={this.state.check_in_date}
                onChange={this.update("check_in_date")}
                />
            </label>
            <label> <span>*</span> Check Out
							<br/>
              <input type="date"
								value={this.state.check_out_date}
                onChange={this.update("check_out_date")}
               	/>
            </label>
              <label className="num-guests-edit"> <span>*</span>Guests
								<br/>
                <select
                  onChange={this.update("number_of_guests")}
                  className="reservation-input"
									value={this.state.number_of_guests}>
									<option value="" disabled defaultValue>Select guests</option>
									{guestOptions.map(option => option)}
                </select>
              </label>
  					<div className="button-box">
            	<input id="signup-button" type="submit" value="Submit" />
  					</div>
          </div>
        </form>
      </div>
  	);
	}
}

export default withRouter(ReservationEditForm);
