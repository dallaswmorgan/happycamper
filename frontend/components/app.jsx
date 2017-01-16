import React from 'react';
import HeaderContainer from './header/header_container';
import { withRouter } from 'react-router';
import EasyTransition from 'react-easy-transition';
const App = ({ children }) => (
  <div>
    <EasyTransition
      path={location.pathname}
      initialStyle={{opacity: 0}}
      transition="opacity 1s ease-in"
      finalStyle={{opacity: 1}}
    >
      <HeaderContainer/>
      { children }
    </EasyTransition>
  </div>
);

export default withRouter(App);
