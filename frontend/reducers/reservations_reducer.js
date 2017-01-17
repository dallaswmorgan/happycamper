import { RECEIVE_RESERVATIONS,
         RECEIVE_RESERVATION,
         REMOVE_RESERVATION,
         RECEIVE_RESERVATION_ERRORS,
        } from '../actions/reservations_actions';
import merge from 'lodash/merge';

const ReservationsReducer = (oldState = { errors: [] }, action) => {
  switch (action.type) {
    case RECEIVE_RESERVATIONS:
      return merge({},oldState,action.reservations);
    case RECEIVE_RESERVATION:
      let state = merge({}, oldState, { [action.reservation.id]: action.reservation });
      state.errors = [];
      return state;
    case REMOVE_RESERVATION:
      let newState = merge({}, oldState);
      delete newState[action.reservation.id];
      return newState;
    case RECEIVE_RESERVATION_ERRORS:
      let anotherState = merge({}, oldState);
      anotherState.errors = action.errors;
      return anotherState;
    default:
      return oldState;
  }
};

export default ReservationsReducer;
