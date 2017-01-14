import * as APIUtil from '../util/site_api_util';
export const RECEIVE_SITES = "RECEIVE_SITES";
export const RECEIVE_SITE = "RECEIVE_SITE";
export const RECEIVE_FEATURED_SITES = "RECEIVE_FEATURED_SITES";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const fetchSites = filters => dispatch => (
  APIUtil.fetchSites(filters).then( sites => dispatch(receiveSites(sites)))
);

export const fetchFeaturedSites = () => dispatch => (
  APIUtil.fetchFeaturedSites().then( sites => dispatch(receiveSites(sites)))
);


export const fetchSite = id => dispatch => (
  APIUtil.fetchSite(id).then( site => dispatch(receiveSite(site)))
);

export const createSite = site => dispatch => (
  APIUtil.createSite(site).then( newSite => dispatch(receiveSite(newSite)))
);

export const updateSite = site => dispatch => (
  APIUtil.updateSite(site).then( newSite => dispatch(receiveSite(newSite)))
);

export const deleteSite = id => dispatch => (
  APIUtil.deleteSite(id).then( deletedSite => dispatch(receiveSite(deletedSite)))
);

const receiveSites = sites => ({
  type: RECEIVE_SITES,
  sites
});



const receiveSite = site => ({
  type: RECEIVE_SITE,
  site
});
