import { RECEIVE_RESERVATIONS,
         RECEIVE_RESERVATION,
         REMOVE_RESERVATION,
         RECEIVE_RESERVATION_ERRORS,
        } from '../actions/reservations_actions';
import merge from 'lodash/merge';

const ReservationsReducer = (oldState = { errors: [] }, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_RESERVATIONS:
      return merge({}, action.reservations);
    case RECEIVE_RESERVATION:
      return merge(newState, { [action.reservation.id]: action.reservation });
    case REMOVE_RESERVATION:
      delete newState[action.reservation.id];
      return newState;
    case RECEIVE_RESERVATION_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return oldState;
  }
};

export default ReservationsReducer;
