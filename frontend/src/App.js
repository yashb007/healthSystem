import React, { useRef} from 'react';
import {  Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import Hdashboard from './Hospital/dashboard/Dashboard';
import Doctorlist from './Hospital/doctorlist/doctorlist';
import Hosprofile from './Hospital/hosprofile/hosprofile';
// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Both from './views/Both'
import Login from './views/Login'
import Register from './views/Register';
import RegisterLab from './views/RegisterLab';
import LoginLab from './views/LoginLab';


const App = () => {
  
  const childRef = useRef();
  
  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} signin="/both" reg="/both" layout={LayoutDefault} />
          <AppRoute path="/both" signin="/both" reg="/both" component={Both} layout={LayoutDefault} />
          <AppRoute path="/hospital/login" signin="/hospital/login" reg="/hospital/register" component={Login} layout={LayoutDefault} />
          <AppRoute path="/hospital/register" signin="/hospital/login" reg="/hospital/register" component={Register} layout={LayoutDefault} />
          <AppRoute path="/lab/login" signin="/lab/login" reg="/lab/register" component={LoginLab} layout={LayoutDefault} />
          <AppRoute path="/lab/register" signin="/lab/login" reg="/lab/register" component={RegisterLab} layout={LayoutDefault} />
          <AppRoute path="/hosdash" component={Hdashboard} />
          <AppRoute path="/doclist" component={Doctorlist} />
          <AppRoute path="/hosprofile" component={Hosprofile} />

        </Switch>
      )} />
  );
}

export default App;