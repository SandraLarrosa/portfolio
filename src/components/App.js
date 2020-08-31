import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import Home from './Home';
import Nav from './Nav';
import Aside from './Aside';
import SobreMi from './SobreMi';
import Skills from './Skills';
import Projects from './Projects';

function App() {
  const [classIcons, setClassIcons] = useState('hidden')

  const showIcons = () => {
    setClassIcons('show')
  }

  return (
    <div className='App'>
      <Nav setShowIcons={showIcons} classIcons={classIcons}/>
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
