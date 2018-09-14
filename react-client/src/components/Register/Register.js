import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import TalentRegister from './TalentRegister';
import EmployerRegister from './EmployerRegister';
import { Tab } from 'semantic-ui-react';

class Register extends React.Component {
    render() {
        const panes = [
            { menuItem: 'Talent', render: () => <Tab.Pane attached={true}>Tab 1 Content</Tab.Pane> },
            { menuItem: 'Employer', render: () => <Tab.Pane attached={true}>Tab 2 Content</Tab.Pane> },
        ]

        const TabExampleSecondaryPointing = () => (
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        )
        return (

            <div>
                <div>
                    <div class='ui pointing secondary menu'>
                        <Link class='active item'
                            to={{
                                pathname: `/register/talent-register`,
                            }}
                        > Talent </Link>
                        <Link class='item'
                            to={{
                                pathname: `/register/employer-register`,
                            }}
                        > Employer </Link>
                    </div>
                </div>

                <Switch>
                    <Route path='/register/employer-register' component={EmployerRegister} />
                    <Route path='/register/talent-register' component={TalentRegister} />
                </Switch>
            </div>


        )
    }
}

export default Register;




