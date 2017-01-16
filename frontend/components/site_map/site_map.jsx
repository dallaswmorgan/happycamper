import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});


class SiteMap extends React.Component {

  componentDidMount() {
    let _mapOptions = {
      center: {lat: 37.773972, lng: -122.431297}, // San Francisco coords
      zoom: 13
    };
    console.log(this.mapNode);
    this.map = new google.maps.Map(this.mapNode, _mapOptions);
    console.log(this.map);
  }

  render() {
    return <div id="map-container" ref={ map => this.mapNode = map }>Map</div>;
  }
}

export default withRouter(SiteMap);
