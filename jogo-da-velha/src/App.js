import React, { Fragment } from 'react';
import Sobre from './objects/Sobre';
import Logo from './objects/Logo';
import Menu from './objects/Menu';

function App() {
  return(
    <Fragment>
      <Logo/>
      <Sobre/>
      <Menu/>
    </Fragment>
  );
}

export default App;
