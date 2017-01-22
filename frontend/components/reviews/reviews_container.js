import { connect } from 'react-redux';
import ReviewsIndex from './reviews_index';
import { deleteReview, receiveReviewErrors, fetchReviews, createReview } from '../../actions/reviews_actions';

const mapStateToProps = ({reviews, session}) => {
  let reviewKeys = Object.keys(reviews).filter(key => key !=="errors");
  return({
    reviews: reviewKeys.map(key => reviews[key]),
    errors: reviews.errors,
    currentUser: session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => ({
  deleteReview: id => dispatch(deleteReview(id)),
  clearErrors: () => dispatch(receiveReviewErrors([])),
  createReview: review => dispatch(createReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsIndex);
