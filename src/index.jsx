import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import GlobalState from './structure/GlobalState.jsx';

ReactDOM.render(
  <GlobalState>
    <HashRouter>
      <App />
    </HashRouter>
  </GlobalState>,
  document.getElementById('root')
);
