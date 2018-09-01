import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import TalentRegister from './TalentRegister';
import EmployerRegister from './EmployerRegister';

class Register extends React.Component {
    render() {
        return (
            
            <div>
                <Link
                    to={{
                        pathname: `/register/employer-register`,
                    }}
                >
                    Employer
                </Link>
                <br/>
                <Link
                    to={{
                        pathname: `/register/talent-register`,
                    }}
                >
                    Talent
                </Link>
                <Switch>
                    <Route path='/register/employer-register' component={EmployerRegister} />
                    <Route path='/register/talent-register' component={TalentRegister} />
                </Switch>
                
                {/* Get this code working as tabs
                <div>
                    <button class="tablink" onclick="openPage('Employee', this, 'red')">Employee</button>
                    <button class="tablink" onclick="openPage('Employer', this, 'green')" id="defaultOpen">Employer</button>

                    <div id="Employee" class="tabcontent">
                        <h3>Employee Register</h3>
                        <p>Find your career match</p>
                    </div>

                    <div id="Employer" class="tabcontent">
                        <h3>Employer Register</h3>
                        <p>Show the world whose the Boss</p>
                    </div>
                </div>  */}
            </div>

            
        )
    }
}

export default Register;




