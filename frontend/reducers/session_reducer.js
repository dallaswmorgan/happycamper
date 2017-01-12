import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (oldState = _nullUser, action) => {
  // debugger;
  Object.freeze(oldState);
  console.log(action);
  switch (action.type) {
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, oldState, { errors });
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, { currentUser });
    case CLEAR_ERRORS:
      console.log('IN CLEAR ERRORS');
      const clearedErrors = merge({}, oldState);
      clearedErrors.errors = [];
      return clearedErrors;
    default:
      return oldState;
  }
};

export default SessionReducer;
