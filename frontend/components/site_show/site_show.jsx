import React from 'react';
import { withRouter } from 'react-router';

class Site extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let siteId = parseInt(this.props.params.id);
    this.props.fetchSite(siteId);
  }
  componentWillReceiveProps(newProps) {
    if (newProps !== this.props) {  
      let siteId = parseInt(newProps.params.id);
      this.props.fetchSite(siteId);
    }
  }

  componentWillUnmount() {
    // debugger;
  }

  render() {
    if (this.props.site) {
      let {name, description, site_images } = this.props.site;
      // Adding default pic if no pics added yet
      if (site_images.length === 0) {
        site_images = [{id: 1, url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484527141/Logomakr_7iM8J2_xwg0qw.png", caption: "Default pic"}];
      }
      return (
        <div className="site-show">

          <div className="site-images-box">
            <ul className="site-images-list">
              {site_images.map(image =>
                <li className="site-image-li" key={image.id}>
                  <img
                    className="site-image"
                    src={image.url}
                    alt={image.caption}/>
                </li>
              )}
            </ul>
          </div>

          <div className="show-text">
              <h1>{name}</h1>
              <h3>{description}</h3>
          </div>

        </div>
      );
    } else
    return(<div></div>);
  }
}

export default Site;
