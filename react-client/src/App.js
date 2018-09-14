import React, { Component } from 'react';
import { Switch, Route, Router, Redirect, withRouter } from 'react-router-dom';
import AdvertisedPositions from './components/AvertisedPositions/AdvertisedPositions';
import JobInfo from './components/JobInfo/JobInfo';
import SideMenu from './components/SideMenu/SideMenu';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import history from './helpers/history';

//See https://github.com/le-kang/AIP2018/blob/master/week04/react-router-example/src/App.js for routing

class App extends Component {
    render() {
        return (
            <div class="ui grid">
                <div class="four wide column">
                    <SideMenu />
                </div>
                <div class="twelve wide stretched column">
                    <h1>Job Matcher</h1>
                    <Router history={history}>
                        <Switch>
                            <Route path='/login' component={Login} />
                            <Route path='/register' component={Register} />
                            <Route path='/:usertype/positions' component={AdvertisedPositions} />
                            <Route path='/:usertype/job-info/:id' component={JobInfo} />
                            <Route render={() => <Redirect to="/login" />} />
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}


export default App;


