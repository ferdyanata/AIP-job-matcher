import React from 'react';
import ApplicantsItem from './ApplicantsItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllApplications } from '../../actions/applicationActions'
import { Header, Image, Table } from 'semantic-ui-react'

class Applicants extends React.Component {

    componentWillMount() {
        this.props.fetchAllApplications();
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
                        {this.props.applications.map(applications =>
                            <ApplicantsItem {...applications} usertype={usertype} />
                        )}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

Applicants.propTypes = {
    fetchAllApplications: PropTypes.func.isRequired,
    applications: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    applications: state.applications.items
});


export default connect(mapStateToProps, { fetchAllApplications })(Applicants)
