import React from 'react';

export default class SideMenu extends React.Component {
    render() {
        return (
            <div class="ui vertical fluid tabular menu">
                <a class=" active item">
                    Roles
                    </a>
                <a class="item">
                    Account
                    </a>
                <a class="item">
                    Search
                    </a>
                <a class="item">
                    Applicants
                    </a>
            </div>

        );
    }
}