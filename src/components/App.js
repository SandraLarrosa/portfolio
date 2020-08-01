import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import Home from './Home';
import Nav from './Nav';
import Aside from './Aside';
import SobreMi from './SobreMi';

function App() {
  return (
    <div className='App'>
      <Nav />
      <main className='main'>
        <Home />
        {/* <SobreMi /> */}
      </main>
      <Aside />
    </div>
  );
}

export default App;
