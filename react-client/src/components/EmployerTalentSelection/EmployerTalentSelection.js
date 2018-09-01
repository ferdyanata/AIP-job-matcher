import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TalentRegister from '../Register/TalentRegister';
import EmployerRegister from '../Register/EmployerRegister';

class EmployerTalentSelection extends React.Component {
    render() {
        return (
            
            <div>
                <Link
                    to={{
                        pathname: `/selection/employer-register`,
                    }}
                >
                    Employer
                </Link>
                <br/>
                <Link
                    to={{
                        pathname: `/selection/talent-register`,
                    }}
                >
                    Talent
                </Link>
                <Switch>
                    <Route path='/selection/employer-register' component={EmployerRegister} />
                    <Route path='/selection/talent-register' component={TalentRegister} />
                </Switch>
                
            </div>
        )
    }
}

export default EmployerTalentSelection;