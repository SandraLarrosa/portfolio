import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Nav from './menu/Nav';
import Aside from './menu/Aside';
import SobreMi from './SobreMi';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
//Styles
import '../stylesheets/App.scss';

function App() {

  return (
    <div className='App'>
      <Nav/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/about' component={SobreMi} />
        </Switch>
      <Aside />
    </div>
  );
}

export default App;
