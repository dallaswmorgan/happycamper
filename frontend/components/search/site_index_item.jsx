import React from 'react';
import { withRouter } from 'react-router';
import Stars from 'react-stars';

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
    let { name, description, site_images, average_review } = this.props.site;
    // to account for sites without images uploaded
    if (name) {

      if (site_images && site_images.length === 0) {
        site_images = [{id: 1, url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484173946/Logomakr_9Hu3Jp_mppdcg.png", caption: "Default pic"}];
      }

      // to account for sites without any reviews
      const stars = average_review === 0 ? <div></div> :  <Stars
                                                            className="stars"
                                                            count={5}
                                                            size={25}
                                                            value={average_review}
                                                            color1={'lightgray'}
                                                            color2={'#28BC8C'}
                                                            edit={false} />;
      return (
        <div className="site-index-item"
            onClick={this.handleClick}>
            <div className="index-item-info">
              <div className="index-item-img-box">
                <img src={site_images[0].url}/>
              </div>
              <div className="index-item-text">
                {stars}
                <h3 className="index-item-title">{name}</h3>
                <h5 className="index-item-description">{description}</h5>
              </div>
            </div>
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}

export default withRouter(IndexItem);
