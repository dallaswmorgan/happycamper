import React from 'react';
import { withRouter } from 'react-router';
import ReviewForm from './review_form';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    // const { user } = this.props.review.author;
    return(
      <h1>{`This is a review item written by me!`}</h1>
    );
  }
}
