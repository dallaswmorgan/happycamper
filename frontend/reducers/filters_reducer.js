import { UPDATE_FILTER } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultFilters = Object.freeze({
  // Box around SF
  geo_bounds: { northEast: { lat: 38.6822944581118, lng: -120.68693732734374 },
                southWest: { lat: 36.8543518010273, lng: -122.84575080390624 }},
  center: { lat: 37.773972, lng: -122.431297 }
});

const FiltersReducer = (state = _defaultFilters, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_FILTER) {
    const newFilter = {
      [action.filter]: action.value
    };
    return merge({}, state, newFilter);
  } else {
    return state;
  }
};

export default FiltersReducer;
