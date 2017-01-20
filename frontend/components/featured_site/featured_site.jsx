import React from 'react';
import { withRouter } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SiteImageForm from '../site_show/site_image_form';

class FeaturedSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredSiteIdx: 1,
      featuredSite: null,
    };
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.nextFeaturedSite = this.nextFeaturedSite.bind(this);
    this.prevFeaturedSite = this.prevFeaturedSite.bind(this);
  }
  componentWillMount() {
    this.props.fetchFeaturedSites();
  }

  // componentWillReceiveProps() {
  //   this.props.fetchFeaturedSites();
  // }

  nextFeaturedSite() {
    let featuredSiteIdx;
    if (this.state.featuredSiteIdx >= this.props.sites.length) {
      featuredSiteIdx = 1;
    } else {
      featuredSiteIdx = this.state.featuredSiteIdx + 1;
    }
    this.setState({featuredSite: this.props.sites[this.state.featuredSiteIdx], featuredSiteIdx});
  }
  prevFeaturedSite() {
    let featuredSiteIdx;
    if (this.state.featuredSiteIdx === 1) {
      featuredSiteIdx = this.props.sites.length;
    } else {
      featuredSiteIdx = this.state.featuredSiteIdx - 1;
    }
    this.setState({featuredSite: this.props.sites[this.state.featuredSiteIdx], featuredSiteIdx});
  }

  handleSiteClick(id) {
    this.props.router.push(`sites/${id}`);
  }

  handleSearchClick() {
    this.props.router.push('sites');
  }

  render() {
    let currentSite = this.state.featuredSite || this.props.sites[0];
    if (currentSite) {
      if (currentSite.site_images.length === 0) {
        currentSite.site_images = [{id: 1, url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484527141/Logomakr_7iM8J2_xwg0qw.png", caption: "Default pic"}];
      }
    return(
      <div className="home-box">
      <img id="right-featured-site-button" onClick={this.nextFeaturedSite}
        src="https://res.cloudinary.com/dallaswmorgan/image/upload/v1484627939/right-arrow_gupy9c.png"/>
      <img id="left-featured-site-button" onClick={this.prevFeaturedSite}
        src="https://res.cloudinary.com/dallaswmorgan/image/upload/v1484627907/left-arrow_cf7aar.png"/>
      <div className="featured-sites-box">
        <div className="featured-site-text">
          <h3>Find your happy place at camps like</h3>
          <div className="site-specific-info">
            <h1>{currentSite.name}</h1>
            <h3>Near {currentSite.city}, {currentSite.state}</h3>
          </div>
            <button onClick={() => this.handleSiteClick(currentSite.id)} id="featured-book">
              Reserve this site
            </button>
            <br/>
            <button onClick={this.handleSearchClick} className="featured-search">
              Discover more...
            </button>
        </div>
        <br/>
        <div className="featured-site-pic" key={currentSite.id}>
          <img onClick={() => this.handleSiteClick(currentSite.id)}
            src={currentSite.site_images[0].url}/>
        </div>
      </div>
      <div className="description-box">
        <h1>Happy Camper is the best way to plan your next camping trip</h1>
        <h3>Search our extensive collection of public and private campgrounds, or list your own land for others to enjoy</h3>
      </div>
    </div>
    );
  } else {
    return(<div></div>);
  }
  }
}

export default withRouter(FeaturedSite);
