import { connect } from 'react-redux';
import ReservationsIndex from './reservations_index';
import { deleteReservation, receiveReservationErrors, fetchReservations } from '../../actions/reservations_actions';

const mapStateToProps = ({reservations}) => ({
    reservations: Object.keys(reservations).map(id => {
      if (id !== "errors") {
        return reservations[id];
      }
    }),
    errors: reservations.errors
});

const mapDispatchToProps = (dispatch) => ({
  deleteReservation: id => dispatch(deleteReservation(id)),
  clearErrors: () => dispatch(receiveReservationErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationsIndex);
