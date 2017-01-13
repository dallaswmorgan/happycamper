import {combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SitesReducer from './sites_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  sites: SitesReducer
});

export default rootReducer;
