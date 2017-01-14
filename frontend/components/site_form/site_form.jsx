import React from 'react';
import { withRouter } from 'react-router';

class SiteForm extends React.Component {

  constructor(props) {
    super(props);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // render() {
  //   const currenSite = state.sites
  //   if (state.sites)
  // }
}

export default withRouter(SiteForm);
