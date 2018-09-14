import React from 'react';
import { Link } from 'react-router-dom';
import { talentRegister } from '../../actions/registerActions';
import { connect } from 'react-redux';


class TalentRegister extends React.Component {
    constructor() {
        super();

        //fields get updated each time the user enters something, handled in handleChange()
        this.state = {
            talentToRegister: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
            submitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { talentToRegister } = this.state;
        this.setState({
            talentToRegister: {
                ...talentToRegister,
                [name]: value
            }
        });
    }

    //When the user clicks the register button this is called, which dispatches an action
    handleSubmit(event) {
        event.preventDefault();
        const { talentToRegister } = this.state;
        const { dispatch } = this.props;
        if (talentToRegister.firstName && talentToRegister.lastName && talentToRegister.password && talentToRegister.email) {
            dispatch(talentRegister(talentToRegister));
            this.setState({ submitted: true });
        }
    }

    render() {
        return (
            <div>
                <form class='ui form' onSubmit={this.handleSubmit}>
                    <h1>Talent Register</h1>
                    <div class='six wide field'>
                        <div class='field'>
                            <label for='firstName'>First name</label>
                            <div class='ui input'>
                                <input type='text' name='firstName' placeholder='First name' onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div class='field'>
                            <label for='lastName'>Last name</label>
                            <div class='ui input'>
                                <input type='text' name='lastName' placeholder='Last name' onChange={this.handleChange} />
                            </div>
                        </div>
                        <div class='field'>
                            <label for="email">Email</label>
                            <div class='ui input'>
                                <input type="text" placeholder="Enter Email" name="email" required onChange={this.handleChange} />
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

export default connect(mapStateToProps)(TalentRegister);