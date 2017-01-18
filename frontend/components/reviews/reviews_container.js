import { connect } from 'react-redux';
import ReviewsIndex from './reviews_index';
import { deleteReview, receiveReviewErrors, fetchReviews } from '../../actions/reviews_actions';

const mapStateToProps = ({reviews}) => {
  let reviewKeys = Object.keys(reviews).filter(key => key !=="errors");
  return({
    reviews: reviewKeys.map(key => reviews[key]),
    errors: reviews.errors
  });
};

// ({
//     reviews: Object.keys(reviews).map(id => {
//       if (id !== "errors") {
//         return reviews[id];
//       }
//     }),
//     errors: reviews.errors
// });

const mapDispatchToProps = (dispatch) => ({
  deleteReview: id => dispatch(deleteReview(id)),
  clearErrors: () => dispatch(receiveReviewErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsIndex);
