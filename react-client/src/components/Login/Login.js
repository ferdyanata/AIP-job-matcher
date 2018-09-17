import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { employerLogin, talentLogin } from '../../actions/loginActions';
// import Login from './components/Login/Login';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userToLogin: {
                email: '',
                password: ''
            },
            usertype: 'talent' 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleUserType() {
        if (this.state.usertype === 'talent') {
            this.setState({ usertype: 'employer' });
        } else {
            this.setState({ usertype: 'talent' });
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { userToLogin } = this.state;
        this.setState({
            userToLogin: {
                ...userToLogin,
                [name]: value
            }
        });
    }

    //When the user clicks the register button this is called, which dispatches an action
    handleSubmit(event) {
        event.preventDefault();
        const { userToLogin } = this.state;
        const { dispatch } = this.props;
        const { usertype } = this.state;
        if (userToLogin.email && userToLogin.password) {
            if (usertype === 'employer'){
                dispatch(employerLogin(userToLogin));
            } else {
                dispatch(talentLogin(userToLogin));
            }
        }
    }

    render() {
        return (
            <div>
                <p>Don't have an account?</p>
                <Link to='/register/talent-register'>
                    Register here
                </Link>
                <form class="ui form">
                    <h1>Log In</h1>
                    <div class='four wide field'>
                        <div class='field'>
                            <label for="employerCheckbox" >Employer?</label>
                            <input type='checkbox' name ="employerCheckbox" onClick={this.toggleUserType.bind(this)}></input>
                        </div>
                        <div class='field'>
                            <label for="email"><b>Email</b></label>
                            <div class='ui input'>
                                <input type="text" placeholder="Enter Email" name="email" required onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div class='field'>
                            <label for="password"><b>Password</b></label>
                            <div class='ui input'>
                                <input type="password" placeholder="Enter Password" name="password" required onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div class='field'>
                            <button id='form-button-control-public' class='ui button' role='button'>
                                Login
                            </button>
                        </div>
                    </div>
                </form>
               
            </div>
        );
    }
}

export default Login