import React from 'react';
import AppliedMatchedDetails from "../AppliedMatchedDetails/AppliedMatchedDetails"

export default class JobInfo extends React.Component {
    render() {
        const usertype = this.props.match.params.usertype;
        return (
            <div class="ui segment">
                <h4>{this.props.match.params.id}</h4>
                <p>This role is suited towards a recent university graduate who is familiar with Javascript.</p>
                <br/>
                {usertype === 'employer' ? ( <AppliedMatchedDetails/>) : <p>Talent stuff goes here</p>}
                                     
            </div>
        );
    }
}

