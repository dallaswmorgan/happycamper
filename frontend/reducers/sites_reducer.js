import { RECEIVE_SITES, RECEIVE_SITE, RECEIVE_FEATURED_SITES, RECEIVE_ERRORS } from '../actions/site_actions';
import merge from 'lodash/merge';

const SitesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  newState.errors = [];
  switch(action.type) {
    case RECEIVE_SITES:
      return action.sites;
    case RECEIVE_SITE:
      const newSite = {[action.site.id]: action.site};
      return newSite;
    default:
      return state;
  }
};

export default SitesReducer;
