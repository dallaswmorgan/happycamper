import React from 'react';
// Actions
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { fetchFeaturedSites, clearSites } from '../actions/site_actions';
import { fetchReservations } from '../actions/reservations_actions';
// Components
import SessionFormContainer from './session_form/session_form_container';
import App from './app';
import SearchContainer from './search/search_container';
import FeaturedSiteContainer from './featured_site/featured_site_container';
import SiteShowContainer from './site_show/site_show_container';
import SiteFormContainer from './site_form/site_form_container';
import SiteIndex from './search/search_container';
import ReservationsContainer from './reservations/reservations_container';

const Root = ({ store }) => {
  const _fetchReservations = () => {
    store.dispatch(fetchReservations());
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _clearSites = () => {
    store.dispatch(clearSites());
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={FeaturedSiteContainer}/>
          <Route path="/sites/new" component={ SiteFormContainer } onEnter={ _ensureLoggedIn } />
          <Route path="/sites/:id" component={ SiteShowContainer } />
          <Route path="/sites" component={ SiteIndex } onEnter={ _clearSites }/>
          <Route path="/reservations" component={ ReservationsContainer } onEnter={ _fetchReservations }/>
        </Route>

      </Router>
    </Provider>
  );
};

export default Root;
