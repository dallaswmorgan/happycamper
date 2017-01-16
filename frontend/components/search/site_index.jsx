import React from 'react';
import SiteIndexItem from './site_index_item';

class SiteIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  // 
  // componentDidMount() {
  //   this.props.fetchSites();
  // }

  render() {
    let sites = this.props.sites;
    sites = Object.keys(sites).map( id => sites[id]);
    const siteItems = sites.map(site => (
      <SiteIndexItem site={site} key={`site${site.id}`}/>
    ));
    if (sites) {
      return(<div>{siteItems}</div>);
    } else {
      return(<div></div>);
    }
  }
}

export default SiteIndex;
