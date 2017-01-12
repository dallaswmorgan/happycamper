import { RECEIVE_SITES, RECEIVE_SITE } from '../actions/site_actions';
import merge from 'lodash/merge';

const sitesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SITES:
      return action.sites;
    case RECEIVE_SITE:
      const newSite = {[action.site.id]: action.site};
      return merge({}, state, newSite);
    default:
      return state;
  }
};

export default sitesReducer;
