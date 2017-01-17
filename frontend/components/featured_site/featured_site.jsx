import React from 'react';
import { withRouter } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class FeaturedSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredSiteIdx: 1,
      featuredSite: null
    };
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.nextFeaturedSite = this.nextFeaturedSite.bind(this);
  }
  componentWillMount() {
    this.props.fetchFeaturedSites();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.sites) {
      this.setState({
        featuredSite: this.props.sites[this.state.featuredSiteIdx]
      });
      this.featuredTimer = setInterval(() => {
        this.nextFeaturedSite();
      }, 6000);
      console.log(this.featuredTimer);
    }
  }

  componentWillUnmount() {
    debugger;
    clearInterval(this.featuredTimer);
  }

  nextFeaturedSite() {
    let featuredSiteIdx;
    if (this.state.featuredSiteIdx >= this.props.sites.length) {
      featuredSiteIdx = 1;
    } else {
      featuredSiteIdx = this.state.featuredSiteIdx + 1;
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

      <div className="featured-sites-box">
        <div className="featured-site-text">
          <h3>Find your happy place at camps like</h3>
          <div className="site-specific-info">
            <h1>{currentSite.name}</h1>
            <h3>in {currentSite.city}, {currentSite.state}</h3>
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
