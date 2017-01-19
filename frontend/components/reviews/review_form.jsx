import React from 'react';
import { withRouter } from 'react-router';
import Stars from 'react-stars';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      body: "",
      rating: 0
    };
    this.updateRating = this.updateRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateBody() {
    return e => this.setState({
      body: e.currentTarget.value
    });
  }

  updateRating(newRating) {
    this.setState({
      rating: newRating
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const site_id = parseInt(this.props.site.id);
    const review = Object.assign({}, this.state, { site_id });
    this.props.createReview(review);
    this.clearForm();
  }

  clearForm() {
    this.setState({
      body: "",
      rating: 0
    });
  }

  render() {
    return (
      <div className="review-form">
        <h3>Write a Review</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h4>Rating</h4>
              <Stars
                className="stars"
                count={5}
                size={25}
                value={this.state.rating}
                color1={'lightgray'}
                color2={'#28BC8C'}
                half={false}
                onChange={this.updateRating}/>
          </div>
          <div>
            <input
              className="review-form-body"
              type="text"
              name={this.body}
              value={this.state.body}
              onChange={this.updateBody()}
              placeholder="Add a review"/>
          </div>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
