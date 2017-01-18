import React from 'react';
import ReservationItem from './reservation_item';

class ReservationsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.reservations) {
      let reservations = this.props.reservations.map(reservation => {
        if (reservation) {
          return (
            <ReservationItem
              clearErrors={this.props.clearErrors}
              reservation={reservation}
              errors={this.props.errors}
              deleteReservation={this.props.deleteReservation}
              key={reservation.id} />
            );
          }
        });

      return (
        <div className="reservations-container">
          <h2>Upcoming Trips</h2>
          <div className="reservations">
            {reservations}
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default ReservationsIndex;
