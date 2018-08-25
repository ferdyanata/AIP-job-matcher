import React from 'react';

export default class AppliedMatchedDetails extends React.Component {
    render() {
        return (
            <div>
                <table class="Matches">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Applied?</th>
                            <th>Matched?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <h4 class="ui image header"></h4>
                            <td><img src="/images/avatar2/small/lena.png" class="ui mini rounded image" /></td>
                            <td>George Webber</td>
                            <td><div class="roleName">
                                Web Developer Intern</div></td>
                            <td class="center aligned"> <i class="large green checkmark icon"></i></td>
                            <td class="center aligned"> <i class="large green checkmark icon"></i></td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <button>ACCEPT</button> or <button>DECLINE</button>
            </div>
        );
    }
}