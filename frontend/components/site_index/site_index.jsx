import React from 'react';
import { withRouter } from 'react-router';

// import SiteIndexItem from './site_index_item';


class SiteIndex extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchSites();
  }
  render() {
    return(
      <div><h1>Sites search page</h1></div>
    );
  }
}

export default withRouter(SiteIndex);
