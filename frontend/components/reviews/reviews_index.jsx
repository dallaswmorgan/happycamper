import React from 'react';
import ReviewItem from './review_item';
import ReviewForm from './review_form';

class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    if (this.props.reviews) {
      let reviews = this.props.reviews.map(review => {
        if (review) {
          return (
            <ReviewItem
              clearErrors={this.props.clearErrors}
              review={review}
              errors={this.props.errors}
              deleteReview={this.props.deleteReview}
              key={`review-${review.id}`} />
          );
        }
      });
      return (
        <div className="reviews-container">
          <h2>Reviews</h2>
          <div className="reviews">
            {reviews}
          </div>
          <ReviewForm site={this.props.site} createReview={this.props.createReview}/>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default ReviewsIndex;
