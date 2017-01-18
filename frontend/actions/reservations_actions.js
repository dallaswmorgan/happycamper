import * as APIUtil from '../util/reservation_api_util';
export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";
export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS";

export const fetchReservations = () => dispatch => (
  APIUtil.fetchReservations().then( reservations => dispatch(receiveReservations(reservations)))
);

export const fetchReservation = id => dispatch => (
  APIUtil.fetchReservation(id).then( reservation => dispatch(receiveReservation(reservation)))
);

export const createReservation = reservation => dispatch => (
  APIUtil.createReservation(reservation).then( newReservation => dispatch(receiveReservation(reservation)))
);

export const updateReservation = reservation => dispatch => (
  APIUtil.updateReservation(reservation).then( updatedReservation => receiveReservation(updatedReservation))
);

export const deleteReservation = id => dispatch => (
  APIUtil.deleteReservation(id).then( deletedReservation => dispatch(removeReservation(deletedReservation)))
);

const receiveReservations = reservations => ({
  type: RECEIVE_RESERVATIONS,
  reservations
});

const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation
});

const removeReservation = reservation => ({
  type: REMOVE_RESERVATION,
  reservation
});
