import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import AdvertisedPositions from './EmployerAvertisedPositions/EmployerAdvertisedPositions';
import JobInfo from './JobInfo/JobInfo';
import SideMenu from './SideMenu/SideMenu';
//Based of https://github.com/le-kang/AIP2018/blob/master/week04/react-router-example/src/App.js

class App extends Component {
  render() {
    return (
      <div>
        <div class="ui grid">
          <div class="four wide column">
            <SideMenu/>
          </div>
          <div class="twelve wide stretched column">
            <h1>Job Matcher</h1>
            <Switch>
              <Route path='/advertised-positions' component= {AdvertisedPositions}/>
              <Route path='/job-info/:id' component = {JobInfo}/>
              <Route render={() => <Redirect to="/advertised-positions"/>} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(App);


