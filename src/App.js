/*********************************************************************************
* WEB422 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: Elena Khoroshun Student ID: 101908168 Date: 1/03/2018
*
********************************************************************************/




import React, { Component } from 'react';
import Teams from '../src/Teams.js';
import Employees from '../src/Employees.js';
import Overview from '../src/Overview.js';
import Projects from '../src/Projects.js';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../src/NotFound.js';

class App extends Component {
  render() {
    let url = "https://hidden-dawn-99445.herokuapp.com/"
    return ( 
      <Switch>
      <Route exact path='/' render={() => (
        <Overview title="Overview" dataSource={url} /> 
      )}/>
      <Route exact path='/projects' render={() => (
              <Projects title="Projects" dataSource={url + "projects"} />
      )}/>
      <Route exact path='/employees' render={() => (
              <Employees title="Employees" dataSource={url + "employees"} />
      )}/>
      <Route exact path='/teams' render={() => (
              <Teams title="Teams" dataSource={url + "teams"} />
      )}/>
      <Route render={() => (
              <NotFound title="Not Found" />
      )}/>
  </Switch>      

    ); 
  }
 }

export default App;