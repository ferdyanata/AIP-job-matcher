import React from 'react';
import { Link } from 'react-router-dom';


export default class EmployerRegister extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/api/employer-register', {
            method: 'POST',
            body: data,
        });
    }

    //TEST
    state = { employers: [] }
        componentDidMount() {
            fetch('/api/get-employers')
                .then(res => res.json())
                .then(employers => this.setState({ employers }));
        }

    render() {
        return (
            <div>

                {/* TEST */}
                {this.state.employers.map(employer => 
                    <div>{employer.companyName}</div>
                )}
                

                <form class='employee register form' onSubmit={this.handleSubmit}>
                    <h1>Employer Register</h1>
                    <div class='equal width fields'>
                        <div class='field'>
                            <label for='form-input-control-first-name'>First name</label>
                            <div class='ui input'>
                                <input type='text' name="firstName" id='form-input-control-first-name' placeholder='First name' />
                            </div>
                        </div>
                        <div class='field'>
                            <label for='form-input-control-last-name'>Last name</label>
                            <div class='ui input'>
                                <input type='text' name="lastName" id='form-input-control-last-name' placeholder='Last name' />
                            </div>
                        </div>
                        <div class='field'>
                            <label for="email"><b>Email</b></label>
                            <input type="text" name="email" placeholder="Enter Email" required />
                        </div>
                        <div class='field'>
                            <label for="psw"><b>Password</b></label>
                            <input type="password" name="password" placeholder="Enter Password" required />
                        </div>
                        <div class='field'>
                            <label for="psw-repeat"><b>Repeat Password</b></label>
                            <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                        </div>
                    </div>

                    <div>
                        <label for='skillsdropbox'><b>Skills</b></label>
                        <dropbox></dropbox>
                        <label for='skillsdropbox'><b>Skills</b></label>
                        <dropbox></dropbox>
                    </div>
                    <label for='ui add resume'><b>Add Resume</b></label>
                    <button class='ui add resume' role='button'>
                        <i aria-hidden='true' class='add' />
                    </button>
                    <div class='field'>
                        <label for='form-textarea-control-opinion'>Cover Letter</label>
                        <textarea id='form-textarea-control-opinion' placeholder='Opinion' rows='3' />
                    </div>

                    <div class='field'>
                        <Link to="/employer/positions">
                            <button id='form-button-control-public' class='ui button' role='button'>
                                Register
                            </button>
                        </Link>
                    </div>

                </form>
            </div>

        );
    }
}