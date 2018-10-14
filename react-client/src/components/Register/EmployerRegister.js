import React from 'react';
import { employerRegister } from '../../actions/registerActions';
import { connect } from 'react-redux';
import { alertActions } from '../../actions/alertActions';

class EmployerRegister extends React.Component {

    constructor() {
        super();
        this.state = {
            employerToRegister: {
                companyName: '',
                email: '',
                password: ''
            }
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
        const { employerToRegister } = this.state;
        const { dispatch } = this.props;
        //validate fields before submitting
        if (employerToRegister.companyName.length > 0) {
            if (employerToRegister.password.length > 6) {
                if (employerToRegister.email.length > 6 && employerToRegister.email.includes("@")){
                    dispatch(employerRegister(employerToRegister));
                } else {
                    dispatch(alertActions.error("Invalid email entered"));
                }
            } else {
                dispatch(alertActions.error("Password must be 6 characters long"));
            }
        } else {
            dispatch(alertActions.error("Please enter a company name"));
        }

    }

    render() {
        return (
            <div>
                <form class='ui form' onSubmit={this.handleSubmit}>
                    <h1>Employer Register</h1>
                    <div class='six wide field'>
                        <div class='field'>
                            <label for='companyName'>Company</label>
                            <div class='ui input'>
                                <input type='text' name="companyName" placeholder='Enter Company name' onChange={this.handleChange} />
                            </div>
                        </div>
                        <div class='field'>
                            <label for="email">Email</label>
                            <div class='ui input'>
                                <input type="text" placeholder="Enter Email" name="email" required onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div class='field'>
                            <label for="password">Password</label>
                            <div class='ui input'>
                                <input type="password" placeholder="Enter Password" name="password" required onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div class='field'>
                        <button id='form-button-control-public' class='ui button'>
                            Register
                        </button>
                    </div>

                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(EmployerRegister);