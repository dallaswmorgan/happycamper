export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = [];
    this.handleClick = handleClick;
    this._createMarkerFromSite = this._createMarkerFromSite.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(sites) {
    this.sites = Object.keys(sites).map(id => sites[id]);
    this._sitesToAdd().forEach(this._createMarkerFromSite);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _sitesToAdd() {
    const currentSites = this.markers.map(marker => marker.siteId);
    return this.sites.filter( site => !currentSites.includes(site.id));
  }

  _markersToRemove() {
    const siteIds = this.sites.map( site => site.id );
    return this.markers.filter( marker => !siteIds.includes(marker.siteId));
  }

  _createMarkerFromSite(site) {
    const pos = new google.maps.LatLng(site.lat, site.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      siteId: site.id
    });
    marker.addListener('click', () => this.handleClick(site));
    this.markers.push(marker);
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}
