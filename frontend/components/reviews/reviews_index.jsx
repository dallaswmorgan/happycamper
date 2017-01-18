import React from 'react';
import ReviewItem from './review_item';

class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger;
    if (this.props.reviews) {
      let reviews = this.props.reviews.map(review => {
        if (review) {
          return <h1>{review.body}</h1>;
          }
        });
      return (
        <div className="reviews-container">
          <h2>Reviews</h2>
          <div className="reviews">
            {reviews}
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default ReviewsIndex;

// <ReviewItem
//   clearErrors={this.props.clearErrors}
//   review={review}
//   errors={this.props.errors}
//   deleteReview={this.props.deleteReview}
//   key={`review-${review.id}`} />
// );
