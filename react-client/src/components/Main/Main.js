/**
 * this page will be for routes only to show what content to put inside its respective pages.
 */

import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Register from '../Register/Register'
import Home from '../Home/Home'
import Login from '../Login/Login'
import AdvertisedPositions from '../AdvertisedPositions/AdvertisedPositions'
import JobInfo from '../JobInfo/JobInfo';
import SideMenu from '../SideMenu/SideMenu';
import EmployerAddPosition from '../EmployerAddPosition/EmployerAddPosition';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Container text style={{ marginTop: '7em' }}>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/:usertype/positions' component={AdvertisedPositions} />
          <Route path='/:usertype/job-info/:id' component={JobInfo} />
          <Route path='/employer/add-position' component={EmployerAddPosition} />
        </Container>
      </Switch>
  </main>
)

export default Main


