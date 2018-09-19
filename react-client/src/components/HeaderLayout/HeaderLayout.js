import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Image,
  Menu,
} from 'semantic-ui-react'

class HeaderLayout extends React.Component {
  render() {
    return (
      < div >
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              {/* <Image size='mini' src='../../../public/images/JobMatcherLogo.png' style={{ marginRight: '1.5em' }} /> */}
              Job Matcher
            </Menu.Item>
            <Link to='/'><Menu.Item as='a'>Home</Menu.Item></Link>
            <Link to='/login'><Menu.Item as='a'>Login</Menu.Item></Link>
            <Link to='/register/talent-register'><Menu.Item as='a'>Sign Up</Menu.Item></Link>
          </Container>
        </Menu>
      </div >
    )
  }
}

export default HeaderLayout