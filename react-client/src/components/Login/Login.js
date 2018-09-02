import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {usertype: 'talent'};
    }
    
    handleChange(){
        if (this.state.usertype === 'talent'){
            this.setState({usertype: 'employer'});
        }else {
            this.setState({usertype: 'talent'});
        }
    }
    render() {
        return (
            <div>
                <p>Don't have an account?</p>
                <Link to ='/register'>
                    Register here
                </Link>
                <form>
                    <h1>Log In</h1>
                    <div class='field'>
                        <label for="psw"><b>Employer? </b></label>
                        <input type='checkbox' onClick={this.handleChange.bind(this)}></input>
                    </div>
                    <div class='equal width fields'>
                        <div class='field'>
                            <label for="email"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" name="email" required />
                        </div>
                        <div class='field'>
                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required />
                        </div>
                        <div class='field'>
                        <Link to={{
                                pathname: `/${this.state.usertype}/positions`,
                            }}>
                            <button id='form-button-control-public' class='ui button' role='button'>
                                Login
                            </button>
                        </Link>
                    </div>
                    </div>
                </form>
            </div>
        );
    }
    
}