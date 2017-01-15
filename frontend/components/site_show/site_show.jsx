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

  render() {

    if (this.props.site) {
      console.log(this.props.site);
      const {name, description, site_images } = this.props.site;
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
