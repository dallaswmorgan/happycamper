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
    this.MarkerManager = new MarkerManager(this.map);
    console.log(this.sites);
    this.MarkerManager.updateMarkers(this.props.sites);
  }

  render() {
    return <div id="map-container" ref={ map => this.mapNode = map }>Map</div>;
  }
}

export default withRouter(SiteMap);
