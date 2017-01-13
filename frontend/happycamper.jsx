import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, logout } from './actions/session_actions';
import { fetchSite, fetchSites, createSite } from './util/site_api_util';
import {fetchFeaturedSites} from './actions/site_actions';

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
  window.fetchSites = fetchSites;
  window.createSite = createSite;
  window.fetchFeaturedSites = fetchFeaturedSites;
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
