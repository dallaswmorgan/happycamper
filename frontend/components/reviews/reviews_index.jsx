import React from 'react';
import ReviewItem from './review_item';
import ReviewForm from './review_form';

class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    // Logged out users cannot review
    // Users cannot review same site twice
    if (this.props.currentUser) {
      this.reviewForm = <ReviewForm
                      site={this.props.site}
                      currentUser={this.props.currentUser}
                      createReview={this.props.createReview}/>;
      if (this.props.reviews.some(review => review.user_id === this.props.currentUser.id)) {
        this.reviewForm = <h5 className='review-warning'>Looks like you have already reviewed this site! Please delete previous review before reviewing again</h5>;
      }
    } else {
      this.reviewForm = <h3>Log in to review</h3>;
    }

    if (this.props.reviews) {
      let reviews = this.props.reviews.map(review => {
        if (review) {
          return (
            <ReviewItem
              clearErrors={this.props.clearErrors}
              review={review}
              errors={this.props.errors}
              deleteReview={this.props.deleteReview}
              currentUser={this.props.currentUser}
              key={`review-${review.id}`} />
          );
        }
      });

      if (reviews.length === 0) {
        reviews = [<h3 className="review-filler">Be the first to leave a review!</h3>];
      }

      return (
        <div className="reviews-container">
          <h2>Reviews</h2>
          <div className="reviews">
            {reviews}
          </div>
          {this.reviewForm}
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default ReviewsIndex;
