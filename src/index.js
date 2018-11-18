import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Body from './components/body';

ReactDOM.render(
  <div>
    <Header></Header>
    <Body></Body>
  </div>,
  document.getElementById('app'),
);

//module.hot.accept();
