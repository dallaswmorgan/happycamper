import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session_form/session_form_container';
import App from './app';
import SearchContainer from './search/search_container';
import FeaturedSiteContainer from './featured_site/featured_site_container';
import SiteIndex from './search/site_index';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={FeaturedSiteContainer}/>
          <Route path="/index" component={ SiteIndex } />
        </Route>

      </Router>
    </Provider>
  );
};

export default Root;
