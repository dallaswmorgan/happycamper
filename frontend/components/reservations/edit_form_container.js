import { connect } from 'react-redux';
import ReservationEditForm from './reservation_edit_form';
import { updateReservation, receiveReservationErrors } from '../../actions/reservations_actions';

const mapStateToProps = ({reservations}, ownProps) => ({
  reservation: reservations[parseInt(ownProps.reservation.id)],
  errors: reservations.errors
});

const mapDispatchToProps = (dispatch) => ({
  updateReservation: reservation => dispatch(updateReservation(reservation)),
  clearErrors: () => dispatch(receiveReservationErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationEditForm);
