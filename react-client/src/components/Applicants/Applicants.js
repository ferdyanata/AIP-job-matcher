import React from 'react';
import ApplicantsItem from './ApplicantsItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApplications } from '../../actions/applicationActions'
import { Header, Image, Table } from 'semantic-ui-react'

export default class Applicants extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            applications: null
        };
    }
    componentWillMount() {
        console.log(this.props.positionId);
        fetch(`/api/applications/${this.props.positionId}`)
            .then(res => res.json())
            .then(
                applications => {
                    console.log(applications);
                    this.setState({
                        applications: applications
                    });
                    this.forceUpdate();
                }
            );
    }

   
    render() {
        return (
            <div>
                <Table basic='very' celled collapsing>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Applicant Name</Table.HeaderCell>
                            <Table.HeaderCell>Received Message</Table.HeaderCell>
                            <Table.HeaderCell>Skills</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Applications applications = {this.state.applications}/>
                    </Table.Body>
                </Table>
            </div>
        );
    }

    
}

function Applications(props) {
    const applications = props.applications;
    const usertype = localStorage.getItem('user_type');
    if (applications) {
        return( 
            <div>
                {applications.map(application =>
                    <ApplicantsItem {...application} usertype={usertype} />
                )}
            </div>
        );
    } else {
        return <p></p>;
    }
}



