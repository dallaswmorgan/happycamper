import React from 'react';
import { withRouter } from 'react-router';
import ReviewForm from './review_form';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this.props.review);
    const { author  } = this.props.review;
    return(
      <div className='review-box'>  
        <h1>{`This is a review item written by ${this.props.review.author}`}</h1>
        <h3>{this.props.review.body}</h3>
      </div>
    );
  }
}

export default ReviewItem;
