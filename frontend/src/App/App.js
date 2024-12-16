import React from 'react';
import { HashRouter } from 'react-router-dom';
import { RouterPages } from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <HashRouter>
        <RouterPages />
      </HashRouter>
    </>
  );
}

export { App };
