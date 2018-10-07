import React from 'react';
import ApplicantsItem from './ApplicantsItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../../helpers/history';
import { Link } from 'react-router-dom';
import { fetchAllApplications } from '../../actions/applicationActions'


class Applicants extends React.Component {

    componentWillMount() {
        this.props.fetchAllApplications();
    }

    render() {
        const usertype = localStorage.getItem('user_type');
        return (
            <div>
                <table className="ApplicantionMatched">
                    <thead>
                        <tr>
                            <th>Applicant's Name</th>
                            <th>Received Message</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.props.applications.map(applications =>
                            <tr>
                            <td>
                                        <ApplicantsItem {...applications} usertype={usertype} />
                                   
                                </td>
                            </tr> 
                            )}
                    </tbody>
                </table>
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
