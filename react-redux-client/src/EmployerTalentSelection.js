import React from 'react';
import { Link } from 'react-router-dom';

export default class EmployerTalentSelection extends React.Component {
    render() {
        return (
            <div>
                <Link
                    to={{
                        pathname: `/employer/positions`,
                    }}
                >
                    Employer
                </Link>
                <br/>
                <Link
                    to={{
                        pathname: `/talent/positions`,
                    }}
                >
                    Talent
                </Link>
            </div>
        )
    }
}