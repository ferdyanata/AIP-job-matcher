import React from 'react';
import { Link } from 'react-router-dom';
import { employerRegister } from '../../actions/registerActions';
import { connect } from 'react-redux';
import { Button, Checkbox, Form } from 'semantic-ui-react'

class EmployerRegister extends React.Component {

    constructor() {
        super();

        this.state = {
            employerToRegister: {
                companyName: '',
                email: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { employerToRegister } = this.state;
        this.setState({
            employerToRegister: {
                ...employerToRegister,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { employerToRegister } = this.state;
        const { dispatch } = this.props;
        if (employerToRegister.companyName && employerToRegister.email && employerToRegister.password) {
            dispatch(employerRegister(employerToRegister));
        }
    }

    render() {
        return (
            <div>
                {/* OLD -> <form class='employee register form' onSubmit={this.handleSubmit}> */}
                <form class='ui form' onSubmit={this.handleSubmit}>
                    <h1>Employer Register</h1>
                    <div class='six wide field'>
                        <div class='field'>
                            <label for='company-name'>Company</label>
                            <div class='ui input'>
                                <input type='text' placeholder='Enter Company name' />
                            </div>
                        </div>
                        <div class='field'>
                            <label for="email">Email</label>
                            <div class='ui input'>
                                <input type="text" placeholder="Enter Email" name="email" required />
                            </div>
                        </div>
                        <div class='field'>
                            <label for="password">Password</label>
                            <div class='ui input'>
                                <input type="password" placeholder="Enter Password" name="password" required />
                            </div>
                        </div>
                    </div>


                    <div class='field'>
                        <button id='form-button-control-public' class='ui button' role='button'>
                            Register
                        </button>
                    </div>

                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps)(EmployerRegister);