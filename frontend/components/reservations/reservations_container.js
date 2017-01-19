import { connect } from 'react-redux';
import ReservationsIndex from './reservations_index';
import { deleteReservation, receiveReservationErrors, fetchReservations } from '../../actions/reservations_actions';

const mapStateToProps = (state, {params}) => ({
    reservations: Object.keys(state.reservations).map(id => {
      if (id !== "errors") {
        return state.reservations[id];
      }
    }),
    errors: state.reservations.errors
  });

const mapDispatchToProps = (dispatch) => ({
  deleteReservation: id => dispatch(deleteReservation(id)),
  clearErrors: () => dispatch(receiveReservationErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationsIndex);
