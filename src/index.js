

// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable no-unused-vars
import Header from './components/header';
import Body from './components/body';
const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}
  <Header></Header>
  <Body></Body>
  </div>,
  document.getElementById('app'),
);


// module.hot.accept();
