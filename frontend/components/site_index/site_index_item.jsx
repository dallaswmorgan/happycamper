import React from 'react';
import { withRouter } from 'react-component';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const siteId = this.props.site.id;
    this.props.router.push(`sites/${siteId}`);
  }

  render() {
    return (
      <div className="site-index-item"
          onClick={this.handleClick}>
          <div className="index-item-info">
            <img className="index-item-img"
              src={"https://res.cloudinary.com/dallaswmorgan/image/upload/v1484267441/russian-river-stock_q6wou3.jpg"}/>
            <h3 className="index-item-title">{this.props.site.name}</h3>
            <h5 className="index-item-description">{this.props.site.description}</h5>
          </div>
      </div>
    );
  }
}

export default withRouter(IndexItem);
