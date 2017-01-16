import React from 'react';
import { withRouter } from 'react-router';

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
    const { name, description, site_images } = this.props.site;
    // to account for sites without images uploaded
    const site_image_url = site_images[0].url || "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484173946/Logomakr_9Hu3Jp_mppdcg.png";
    return (
      <div className="site-index-item"
          onClick={this.handleClick}>
          <div className="index-item-info">
            <img className="index-item-img"
              src={site_image_url}/>
            <h3 className="index-item-title">{name}</h3>
            <h5 className="index-item-description">{description}</h5>
          </div>
      </div>
    );
  }
}

export default withRouter(IndexItem);
