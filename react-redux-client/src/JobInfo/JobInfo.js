import React from 'react';
import AppliedMatchedDetails from '../AppliedMatchedDetails.js/AppliedMatchedDetails'

export default class JobInfo extends React.Component {
    render() {
        return (
            <div class="ui segment">
                <h4>{this.props.match.params.id}</h4>
                <p>This role is suited towards a recent university graduate who is familiar with Javascript.</p>
                <br/>
                 <AppliedMatchedDetails/>
            </div>
        );
    }
}

