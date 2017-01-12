import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, logout } from './actions/session_actions';
import { fetchSite, fetchSites } from './util/site_api_util';

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
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
