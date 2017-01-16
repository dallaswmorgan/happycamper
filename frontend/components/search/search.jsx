import React from 'react';

// import FilterForm from './filter_form';
import { withRouter } from 'react-router';
import SiteIndex from './site_index';
import SiteMap from '../site_map/site_map';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSites();
  }

  render() {
    const sites = this.props.sites;
    if (sites) {
      return(
        <div className="search-page">
          <div className="search-left-half">
            <SiteIndex sites={sites} />
          </div>
          <div className="search-right-half">
            <SiteMap />
          </div>
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}


export default withRouter(Search);
