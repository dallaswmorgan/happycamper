import React from 'react';
import { withRouter } from 'react-router';
import ReviewForm from './review_form';
import Stars from 'react-stars';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { author, rating  } = this.props.review;
    return(
      <div className='review-box'>
        <div className='review-user-box'>
          <h1>{this.props.review.author}</h1>
        </div>
        <div className='review-text-box'>
          <Stars
            className="stars"
            count={5}
            size={25}
            value={rating}
            color1={'lightgray'}
            color2={'#28BC8C'}
            edit={false} />
          <h3>{this.props.review.body}</h3>
        </div>
      </div>
    );
  }
}

export default ReviewItem;
