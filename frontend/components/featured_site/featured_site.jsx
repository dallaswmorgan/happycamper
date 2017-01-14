import React from 'react';

class FeaturedSite extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchFeaturedSites();
  }

  render() {
    const currentSite = this.props.sites[0];
    if (currentSite) {
    return(
      <div className="featured-sites-box">
        <div className="featured-site-text">
          <h3>Find your happy place at camps like</h3>
          <br/>
          <h1>{currentSite.name}</h1>
        </div>
        <br/>
        <div className="featured-site-pic" key={currentSite.id}>
          <img
            src="http://res.cloudinary.com/dallaswmorgan/image/upload/v1484267441/russian-river-stock_q6wou3.jpg"/>
        </div>
      </div>
    );
  } else {
    return(<div></div>);
  }
  }
}

export default FeaturedSite;
