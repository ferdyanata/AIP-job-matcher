import React from 'react';
import { Link } from 'react-router-dom';

export default class TalentRegister extends React.Component {
    render() {
        return (
            <div>
                <form class='ui form'>
                    <h1>Talent Register</h1>
                    <div class='six wide field'>
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