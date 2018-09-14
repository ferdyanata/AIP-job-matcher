import React from 'react';
import { employerRegister } from '../../actions/registerActions';
import { connect } from 'react-redux';

class EmployerRegister extends React.Component {

    constructor() {
        super();

        //fields get updated each time the user enters something, handled in handleChange()
        this.state = {
            employerToRegister: {
                companyName: '',
                email: '',
                password: ''
            },
            submitted: false,
            employerLoggedIn: null,
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

    //When the user clicks the register button this is called, which dispatches an action
    handleSubmit(event) {
        event.preventDefault();
        const { employerToRegister } = this.state;
        const { dispatch } = this.props;
        if (employerToRegister.companyName && employerToRegister.email && employerToRegister.password) {
            dispatch(employerRegister(employerToRegister));
            this.setState({ submitted: true });

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
                        <button id='form-button-control-public' class='ui button' role='button'>
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