import React from 'react';
import AppliedMatchedDetailsItem from './AppliedMatchedDetailsItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../../helpers/history';
import { Link } from 'react-router-dom';
import { fetchAllApplications } from '../../actions/applicationActions'


class AppliedMatchedDetails extends React.Component {

    componentWillMount() {
        // if (!localStorage.getItem('user_id') || !localStorage.getItem('user_type')) {
        //     history.push('/');
        //     console.log('invalid session');
        // } if (localStorage.getItem('user_type') === 'employer') {
        //     this.props.fetchAllPositions((localStorage.getItem('user_id'));

        // }
        this.props.fetchAllApplications();

    }

    render() {
        const usertype = localStorage.getItem('user_type');
        return (
            <div>
                <table className="ApplicantionMatched">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Applicant's Name</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.applications.map(applications =>
                            <div>
                                <AppliedMatchedDetailsItem {...applications} usertype={usertype}/>

                                <br />
                            </div>
                        )}
                    </tbody>
                </table>
                <br />
            </div>
        );
    }
}

AppliedMatchedDetails.propTypes = {
    fetchAllApplications: PropTypes.func.isRequired,
    applications: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    applications: state.applications.items
});


export default connect(mapStateToProps, { fetchAllApplications })(AppliedMatchedDetails)
