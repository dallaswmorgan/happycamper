import React from 'react';
import HeaderContainer from './header/header_container';
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

export default App;
