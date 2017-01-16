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

  }

  compon
}
