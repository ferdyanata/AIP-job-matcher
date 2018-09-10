import React from 'react';
import { Link } from 'react-router-dom';

export default class TalentRegister extends React.Component {
    render() {
        return (
            <div>
                <form class='employee register form'>
                    <h1>Talent Register</h1>
                    <div class='equal width fields'>
                        <div class='field'>
                            <label for='first-name'>First name</label>
                            <div class='ui input'>
                                <input type='text' placeholder='First name' />
                            </div>
                        </div>
                        <div class='field'>
                            <label for='last-name'>Last name</label>
                            <div class='ui input'>
                                <input type='text' placeholder='Last name' />
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
                   
                    {/* <div>
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
                        <textarea id='form-textarea-control-opinion' placeholder='Opinion' rows='3'/>
                    </div> */}
                    <br/>
                    <div class='field'>
                        <Link to="/talent/positions">
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