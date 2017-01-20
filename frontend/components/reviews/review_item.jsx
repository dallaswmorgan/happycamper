import React from 'react';
import { withRouter } from 'react-router';
import ReviewForm from './review_form';
import Stars from 'react-stars';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { author_fname, author_lname, author_image, rating, id, user_id } = this.props.review;
    let deleteButton = <div></div>;
    if (this.props.currentUser && user_id === this.props.currentUser.id) {
      deleteButton = <button className="review-delete-button" onClick={() => this.props.deleteReview(id)}>Delete Review</button>;
    }
    return(
      <div className='review-box'>
        <div className='review-user-box'>
          <img className='review-user-image' src={author_image}/>
          <h4>{`${author_fname} ${author_lname.slice(0,1)}.`}</h4>
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
          <p>{this.props.review.body}</p>
          <div className='delete-button-container'>
            {deleteButton}
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewItem;
