import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import Home from './Home';
import Nav from './Nav';
import Aside from './Aside';
import SobreMi from './SobreMi';
import Skills from './Skills';

function App() {
  return (
    <div className='App'>
      <Nav />
      <main className='main'>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={SobreMi} />
          <Route exact path="/skills" component = {Skills}/>
        </Switch>
      </main>
      <Aside />
    </div>
  );
}

export default App;
