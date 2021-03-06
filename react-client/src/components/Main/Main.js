/**
 * this page will be for routes only to show what content to put inside its respective pages.
 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Register from '../Register/Register'
import Home from '../Home/Home'
import Login from '../Login/Login'
import AdvertisedPositions from '../AdvertisedPositions/AdvertisedPositions'
import PositionDetails from '../PositionDetails/PositionDetails';
import EmployerAddPosition from '../EmployerAddPosition/EmployerAddPosition';
import EmployerEditPosition from '../EmployerEditPosition/EmployerEditPosition';

const Main = () => (
  <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Container text style={{ marginTop: '7em' }}>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/positions' component={AdvertisedPositions} />
          <Route path='/position/:id' component={PositionDetails} />
          <Route path='/edit-position/:id' component={EmployerEditPosition} />
          <Route path='/add-position' component={EmployerAddPosition} />
        </Container>
      </Switch>
  </main>
)

export default Main


