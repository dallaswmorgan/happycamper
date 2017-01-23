export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = [];
    this.handleClick = handleClick;
    this._createMarkerFromSite = this._createMarkerFromSite.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
    this._addWindow = this._addWindow.bind(this);
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
      siteId: site.id,
      icon: 'http://res.cloudinary.com/dallaswmorgan/image/upload/c_scale,w_30/v1484173946/Logomakr_9Hu3Jp_mppdcg.png'
    });
    marker.addListener('click', () => this.handleClick(site));
    this._addWindow(site, marker);
    this.markers.push(marker);
  }

  _addWindow(site, marker) {


    const windowString = "<div class='map-window'>" +
    `<h4 class='map-name'>${site.name}</h4>` +
    "</div>";
    const window = new google.maps.InfoWindow({
      content: windowString,
      disableAutoPan: true,
      maxWidth: 200
    });

    marker.addListener('mouseover', () => {
      window.open(this.map, marker);
      // marker.setIcon("yellow");
    });

    marker.addListener('mouseout', () => {
      window.close(this.map, marker);
    });

    // hovering over html element
    const htmlElement = document.getElementById(`site-${site.id}`);
    if (htmlElement) {
      htmlElement.onmouseover = () => {
        window.open(this.map, marker);
      };

      htmlElement.onmouseout = () => {
        window.close(this.map, marker);
      };
    }

  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}
