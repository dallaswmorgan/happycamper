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
    this.props.fetchSites(this.props.filters);
  }


  render() {
    const sites = this.props.sites;
    const updateFilter = this.props.updateFilter;
    const center = this.props.filters.center;
    console.log(this.props.filters);
    // <button width="100px" height="100px" value="Click me" onClick={e  => updateFilter('amenities', {picnic_table: !this.state.filters.picnic_table})}>Picnic</button>
    // <button width="100px" height="100px" value="Click me" onClick={e  => updateFilter('eclipse', true)}>Eclipse</button>
    if (sites) {
      return(
        <div className="search-page">
          <div className="search-left-half">
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
