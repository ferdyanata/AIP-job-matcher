import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Menu,
} from 'semantic-ui-react'

class HeaderLayout extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.logout = this.logout.bind(this);
  }

  logout() {
    if (localStorage.getItem('user_id') || localStorage.getItem('user_type')) {
      localStorage.clear();
    }
  }
  
  render() {
    return (
      < div >
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              {/* <Image size='mini' src='../../../public/images/JobMatcherLogo.png' style={{ marginRight: '1.5em' }} /> */}
              Job Matcher
            </Menu.Item>
            <Link to={getHomeLink()}><Menu.Item as='a'>Home</Menu.Item></Link>
            <Link to='/login'><Menu.Item as='a'>Login</Menu.Item></Link>
            <Link to='/'><Menu.Item onClick={this.logout} as='a'>Logout</Menu.Item></Link>
            <Link to='/register/talent-register'><Menu.Item as='a'>Sign Up</Menu.Item></Link>
          </Container>
        </Menu>
      </div >
    )
  }
}

function getHomeLink() {
  if (!localStorage.getItem('user_id') || !localStorage.getItem('user_type')) {
            return '/';
        } else {
            return '/positions';
        }
}

export default HeaderLayout