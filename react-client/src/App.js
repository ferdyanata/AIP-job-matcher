import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import AdvertisedPositions from './AvertisedPositions/AdvertisedPositions';
import JobInfo from './JobInfo/JobInfo';
import SideMenu from './SideMenu/SideMenu';
import EmployerTalentSelection from './EmployerTalentSelection';
//Based of https://github.com/le-kang/AIP2018/blob/master/week04/react-router-example/src/App.js

class App extends Component {
    render() {
        return (
            <div>
                <div class="ui grid">
                    <div class="four wide column">
                        <SideMenu />
                    </div>
                    <div class="twelve wide stretched column">
                        <h1>Job Matcher</h1>
                        <Switch>
                            <Route path='/selection' component={EmployerTalentSelection} />
                            <Route path='/:usertype/positions' component={AdvertisedPositions} />
                            <Route path='/:usertype/job-info/:id' component={JobInfo} />
                            <Route render={() => <Redirect to="/selection" />} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}


export default withRouter(App);


