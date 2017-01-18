import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import {fetchFeaturedSites, fetchSites} from '../actions/site_actions';
import {fetchReservations} from '../actions/reservations_actions';
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

  const _fetchSites = () => {
  store.dispatch(fetchSites());
};



  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={FeaturedSiteContainer}/>
          <Route path="/sites/new" component={ SiteFormContainer } />
          <Route path="/sites/:id" component={ SiteShowContainer } />
          <Route path="/sites" component={ SiteIndex } />
          <Route path="/reservations" component={ ReservationsContainer } onEnter={_fetchReservations}/>
        </Route>

      </Router>
    </Provider>
  );
};

export default Root;
