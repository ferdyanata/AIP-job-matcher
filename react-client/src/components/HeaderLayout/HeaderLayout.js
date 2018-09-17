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
            <Menu.Item as='a'><Link as='a' to='/'>Home</Link></Menu.Item>
            <Menu.Item as='a'><Link to='/login'>Login</Link></Menu.Item>
            <Menu.Item as='a'><Link to='/register/talent-register'>Sign Up</Link></Menu.Item>
          </Container>
        </Menu>
      </div >
    )
  }
}

export default HeaderLayout