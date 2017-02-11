import React from 'react';
import SiteIndexItem from './site_index_item';

class SiteIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let sites = this.props.sites;
    sites = Object.keys(sites).map( id => sites[id]);
    const siteItems = sites.map(site => (
      <SiteIndexItem site={site} key={`site${site.id}`}/>
    ));
    if (sites.length > 0) {
      return(<div>{siteItems}</div>);
    } else {
      return(<div><h3>No sites match your request. Try zooming out or updating your filters</h3></div>);
    }
  }
}

export default SiteIndex;
