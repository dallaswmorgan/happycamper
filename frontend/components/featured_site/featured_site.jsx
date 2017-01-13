import React from 'react';

class FeaturedSite extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFeaturedSites();
  }

  render() {
    if (this.props.sites) {
      return(
        <div>{this.props.sites.map(site => (
            <h1>{site.name}</h1>
          ))}</div>
      );
    }
    return( <div></div>);
  }
}

export default FeaturedSite;
