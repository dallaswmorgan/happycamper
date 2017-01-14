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
    this.nextFeaturedSite = this.nextFeaturedSite.bind(this);
  }
  componentWillMount() {
    this.props.fetchFeaturedSites();
  }

  componentDidMount() {
    this.setState({
      featuredSite: this.props.sites[this.state.featuredSiteIdx]
    });
  }

  nextFeaturedSite() {
    if (this.state.featuredSiteIdx >= this.props.sites.length) {
      this.state = { featuredSiteIdx: 1};
    } else {
      this.state = {featuredSiteIdx: (this.state.featuredSiteIdx + 1)};
    }
    this.setState({featuredSite: this.props.sites[this.state.featuredSiteIdx]});
  }
  handleSiteClick(id) {
    this.props.router.push(`sites/${id}`);
  }

  render() {
    console.log(this.state);
    let currentSite = this.state.featuredSite || this.props.sites[0];
    // let currentSite = this.props.sites[0] || this
    if (currentSite) {
    return(
      <div className="featured-sites-box">
        <div className="featured-site-text">
          <h3>Find your happy place at camps like</h3>
          <h1>{currentSite.name}</h1>
          <h3>in {currentSite.city}, {currentSite.state}</h3>
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
          <img onClick={() => this.nextFeaturedSite()}
            src="https://res.cloudinary.com/dallaswmorgan/image/upload/v1484267441/russian-river-stock_q6wou3.jpg"/>
        </div>
      </div>
    );
  } else {
    return(<div></div>);
  }
  }
}

export default withRouter(FeaturedSite);
