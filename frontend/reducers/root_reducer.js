import {combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SitesReducer from './sites_reducer';
import ReservationsReducer from './reservations_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  sites: SitesReducer,
  reservations: ReservationsReducer
});

export default rootReducer;
