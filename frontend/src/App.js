import React, { useRef} from 'react';
import {  Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import Hdashboard from './Hospital/dashboard/Dashboard';
import Doctorlist from './Hospital/doctorlist/doctorlist';
import Hosprofile from './Hospital/hosprofile/hosprofile';
import AddDoctor from './Hospital/AddDoctor/addDoctor'
import AddUser from './Hospital/AddUser/addUser';
import UserPrescription from './Hospital/AddUser/prescription/prescription';
import AddUserProfile from './Hospital/AddUser/add user profile/adduserprofile';

//Import lab material
import Lab from './Lab/lab';
import LabProfile from './Lab/labprofile/labprofile';
// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Both from './views/Both'
import Login from './views/Login'
import Register from './views/Register';
import RegisterLab from './views/RegisterLab';
import LoginLab from './views/LoginLab';
import Prescription from './Hospital/AddUser/prescription/prescription';


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
          <AppRoute path="/adddoctor" component={AddDoctor} />
          <AppRoute path="/adduser" component={AddUser} />
          <AppRoute path="/prescription" component={UserPrescription} />
          <AppRoute path="/adduserprofile" component={AddUserProfile} />
          <AppRoute path="/lab" component={Lab} />
          <AppRoute path="/labprofile" component={LabProfile} />
          <AppRoute path="/adduserprofile" component={AddUserProfile} />
          <AppRoute path="/lab" component={Lab} />
        </Switch>
      )} />
  );
}

export default App;