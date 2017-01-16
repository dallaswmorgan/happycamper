import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});


class SiteMap extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    let _mapOptions = {
      center: {lat: 37.773972, lng: -122.431297}, // San Francisco coords
      zoom: 7
    };
    this.map = new google.maps.Map(this.mapNode, _mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    this.MarkerManager.updateMarkers(this.props.sites);
  }

  componentWillReceiveProps(newProps) {
    this.MarkerManager.updateMarkers(newProps.sites);
  }

  _handleMarkerClick(site) {
    this.props.router.push(`sites/${site.id}`);
  }

  render() {
    return <div id="map-container" ref={ map => this.mapNode = map }>Map</div>;
  }
}

export default withRouter(SiteMap);
