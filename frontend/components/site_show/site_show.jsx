import React from 'react';
import { withRouter } from 'react-router';

class Site extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let siteId = parseInt(this.props.params.id);
    this.props.fetchSite(siteId);
  }

  render() {

    if (this.props.site) {
      const {name, description } = this.props.site;
      return (
        <div className="site-show">
          <div className="show-text">
              <h1>{name}</h1>
              <h3>{description}</h3>
          </div>
        </div>
      );
    } else
    return(<div></div>);
  }
}

export default Site;
