import React from 'react';

class FeaturedSite extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchFeaturedSites();
  }
  handleSiteClick() {

  }

  render() {
    const currentSite = this.props.sites[0];
    if (currentSite) {
    return(
      <div className="featured-sites-box">
        <div className="featured-site-text">
          <h3>Find your happy place at camps like</h3>
          <h1>{currentSite.name}</h1>
          <h3 onClick={this.handleSiteClick(currentSite.id)}>in {currentSite.city}, {currentSite.state}</h3>
            <button onClick={this.handleSiteClick(currentSite.id)} id="featured-book">
              Reserve this site
            </button>
            <br/>
            <button onClick={this.handleSearchClick} className="featured-search">
              Discover more...
            </button>
        </div>
        <br/>
        <div className="featured-site-pic" key={currentSite.id}>
          <img onClick={this.handleSiteClick(currentSite.id)}
            src="https://res.cloudinary.com/dallaswmorgan/image/upload/v1484267441/russian-river-stock_q6wou3.jpg"/>
        </div>
      </div>
    );
  } else {
    return(<div></div>);
  }
  }
}

export default FeaturedSite;
