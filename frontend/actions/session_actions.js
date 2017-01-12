import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const login = user => dispatch => (
  APIUtil.login(user).then(currentUser => dispatch(receiveCurrentUser(currentUser)),
                      err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then( prevUser => dispatch(receiveCurrentUser(null)),
                      err => dispatch(receiveErrors(err.responseJSON)))
);

export const signup = user => dispatch => (
  APIUtil.signup(user).then( newUser => dispatch(receiveCurrentUser(newUser)),
                      err => dispatch(receiveErrors(err.responseJSON)))
);



export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
