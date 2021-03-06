import React from 'react';
import ApplicantsItem from './ApplicantsItem';
import { Table } from 'semantic-ui-react'

export default class Applicants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            applications: []
        };
    }
    componentDidMount() {
        fetch(`/api/applications/${this.props.positionId}`)
            .then(res => res.json())
            .then(
                applications => {
                    this.setState({
                        applications: applications
                    });
                    //To ensure applicants list is updated
                    this.forceUpdate();
                }, 
                error => {
                    console.log(error);
                }
            );
    }


    render() {
        const usertype = localStorage.getItem('user_type');
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
                        {/* Fill table with applicant details (ApplicantsItem's) */}
                        {this.state.applications ? (
                            this.state.applications.map(application =>
                                <ApplicantsItem {...application} usertype={usertype} />
                            )
                        ) : null
                        }
                    </Table.Body>
                </Table>
            </div>
        );
    }
}


