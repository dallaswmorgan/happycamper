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
      center: this.props.center, // San Francisco coords
      zoom: 7,
      mapTypeId: 'terrain'
    };
    this.map = new google.maps.Map(this.mapNode, _mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    this._registerListeners();
    this.MarkerManager.updateMarkers(this.props.sites);
  }

  componentWillReceiveProps(newProps) {
    this.MarkerManager.updateMarkers(newProps.sites);
  }

  _handleMarkerClick(site) {
    this.props.router.push(`sites/${site.id}`);
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const center = this.map.getCenter().toJSON;
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const geo_bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('center', center);
      this.props.updateFilter('geo_bounds', geo_bounds);
    });
  }

  render() {
    return <div id="map-container" ref={ map => this.mapNode = map }>Map</div>;
  }
}

export default withRouter(SiteMap);
