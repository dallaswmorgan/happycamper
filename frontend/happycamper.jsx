import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, logout } from './actions/session_actions';
// import { fetchSite, fetchSites, createSite } from './util/site_api_util';
import {fetchFeaturedSites, fetchSite, createSite, fetchSites } from './actions/site_actions';
import { updateFilter } from './actions/filter_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(window.currentUser) {
    const preLoadedState= { session: { currentUser: window.currentUser } };
    store = configureStore(preLoadedState);
  } else {
    store = configureStore();
  }
  // testing only
  window.fetchSite = fetchSite;
  window.fetchFeaturedSites = fetchFeaturedSites;
  window.createSite = createSite;
  window.fetchSites = fetchSites;
  window.updateFilter = updateFilter;
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
