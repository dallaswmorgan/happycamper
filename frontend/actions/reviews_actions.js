import * as APIUtil from '../util/review_api_util';
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

export const fetchReviews = (siteId) => dispatch => (
  APIUtil.fetchReviews(siteId).then( reviews => dispatch(receiveReviews(reviews)))
);

export const fetchReview = id => dispatch => (
  APIUtil.fetchReview(id).then( review => dispatch(receiveReview(review)))
);

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then( newReview => dispatch(receiveReview(newReview)))
);

export const updateReview = review => dispatch => {
  return(APIUtil.updateReview(review).then( updatedReview => dispatch(receiveReview(updatedReview))));
};

export const deleteReview = id => dispatch => (
  APIUtil.deleteReview(id).then( deletedReview => dispatch(removeReview(deletedReview)))
);

const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});
