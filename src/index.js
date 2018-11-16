

// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line no-unused-vars
import Example from './components/example';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}
  <Example></Example>
  </div>,
  document.getElementById('app'),
);


// module.hot.accept();
