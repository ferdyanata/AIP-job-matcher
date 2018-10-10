import React from 'react';
import ApplicantsItem from './ApplicantsItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header, Image, Table } from 'semantic-ui-react'

export default class Applicants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
                        {this.state.applications ? (

                            this.state.applications.map(application =>
                                <ApplicantsItem {...application} usertype={usertype} />
                            )

                        ) :
                            <p></p>
                        }
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
        return (
            <div>

            </div>
        );
    } else {
        return <p></p>;
    }
}



