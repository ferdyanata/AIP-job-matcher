/**
 * this page will be for routes only to show what content to put inside its respective pages.
 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Register from '../Register/Register'
import Home from '../Home/Home'
import Login from '../Login/Login'
import { Container } from 'semantic-ui-react'

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
      </Container>
    </Switch>
  </main>
)

export default Main


