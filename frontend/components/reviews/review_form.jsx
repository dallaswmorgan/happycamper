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
    // return (
    const author_image = this.props.currentUser.image_url;
    const author_fname = this.props.currentUser.fname;
    const author_lname = this.props.currentUser.lname;
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
              value={this.state.rating}
              color1={'lightgray'}
              color2={'#28BC8C'}
              half={false}
              onChange={this.updateRating} />
            <textarea
              className="form-body"
              name={this.body}
              cols='40'
              rows='5'
              value={this.state.body}
              onChange={this.updateBody()}
              placeholder="Add review...">
            </textarea>
            <div className="review-button-container">
              <button
                className="review-submit-button"
                onClick={this.handleSubmit}>Submit Review</button>
            </div>
          </div>
        </div>
      );
    // );
  }
}

export default ReviewForm;
//
// <div className="review-form">
//   <h3>Write a Review</h3>
//   <form onSubmit={this.handleSubmit}>
//     <div>
//       <h4>Rating</h4>
//       <Stars
//         className="stars"
//         count={5}
//         size={25}
//         value={this.state.rating}
//         color1={'lightgray'}
//         color2={'#28BC8C'}
//         half={false}
//         onChange={this.updateRating}/>
//     </div>
//     <div>
//       <input
//         className="review-form-body"
//         type="text"
//         name={this.body}
//         value={this.state.body}
//         onChange={this.updateBody()}
//         placeholder="Add a review"/>
//     </div>
    // <input type="submit"/>
//   </form>
// </div>
