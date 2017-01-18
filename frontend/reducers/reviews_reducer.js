import { RECEIVE_REVIEWS,
         RECEIVE_REVIEW,
         REMOVE_REVIEW,
         RECEIVE_REVIEW_ERRORS,
       } from '../actions/reviews_actions';
import merge from 'lodash/merge';

const _nullState = { errors: [] };
const ReviewsReducer = (oldState = _nullState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return merge({}, _nullState,  action.reviews);
    case RECEIVE_REVIEW:
      newState[action.review.id] = action.review;
      return newState;
    case REMOVE_REVIEW:
      delete newState[action.review.id];
      return newState;
    case RECEIVE_REVIEW_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return oldState;
  }
};

export default ReviewsReducer;
