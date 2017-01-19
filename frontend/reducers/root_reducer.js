import {combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SitesReducer from './sites_reducer';
import ReservationsReducer from './reservations_reducer';
import ReviewsReducer from './reviews_reducer';
import FiltersReducer from './filters_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  sites: SitesReducer,
  reservations: ReservationsReducer,
  reviews: ReviewsReducer,
  filters: FiltersReducer
});

export default rootReducer;
