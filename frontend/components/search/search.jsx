import React from 'react';

// import FilterForm from './filter_form';
import { withRouter } from 'react-router';
import { StickyContainer, Sticky } from 'react-sticky';
import SiteIndex from './site_index';
import SiteMap from '../site_map/site_map';
import FilterForm from './filter_form';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSites(this.props.filters);
  }


  render() {
    const sites = this.props.sites;
    const updateFilter = this.props.updateFilter;
    const center = this.props.filters.center;
    if (sites) {
      return(
        <div className="search-page">
          <div className="search-left-half">

            <FilterForm
              filters={this.props.filters}
              updateFilter={this.props.updateFilter}/>
            <SiteIndex sites={sites} />
          </div>
          <div className="search-right-half">
            <SiteMap
              sites={sites}
              updateFilter={updateFilter}
              center={center}/>
          </div>
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}


export default withRouter(Search);
