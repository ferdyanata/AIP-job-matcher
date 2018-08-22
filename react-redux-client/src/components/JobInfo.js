import React from 'react';

export default class JobInfo extends React.Component {
    render() {
        return (
            <div> 
                <h4>{this.props.match.params.id}</h4>
                <p>This role is suited towards a recent university graduate who is familiar with Javascript.</p>
            </div>
        );
    }
}