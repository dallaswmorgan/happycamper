import {combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import sitesReducer from './sites_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  sites: sitesReducer
});

export default rootReducer;
