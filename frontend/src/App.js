import React, { useRef} from 'react';
import {  Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Both from './views/Both'
import Login from './views/Login'
import Register from './views/Register';


const App = () => {

  const childRef = useRef();
  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute path="/both" component={Both} layout={LayoutDefault} />
          <AppRoute path="/hospital/login" component={Login} layout={LayoutDefault} />
          <AppRoute path="/hospital/register" component={Register} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;