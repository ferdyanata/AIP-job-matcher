import React from 'react';

export default class SideMenu extends React.Component {
    render() {
        return (
            <div className="ui vertical fluid tabular menu">
                <a className=" active item">
                    Roles
                    </a>
                <a className="item">
                    Account
                    </a>
                <a className="item">
                    Search
                    </a>
                <a className="item">
                    Applicants
                    </a>
            </div>

        );
    }
}