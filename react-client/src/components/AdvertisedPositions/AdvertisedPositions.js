import React from 'react';
import AdvertisedPosition from '../AdvertisedPosition/AdvertisedPosition';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllPositions, fetchEmployersPositions } from '../../actions/positionActions';
import { Link } from 'react-router-dom';
import history from '../../helpers/history'


class AdvertisedPositions extends React.Component {

    componentWillMount() {
        if (!localStorage.getItem('user_id') || !localStorage.getItem('user_type')) {
            history.push('/');
            console.log('Invalid session');
        } else {
            if (localStorage.getItem('user_type') === 'employer') {
                this.props.fetchEmployersPositions(localStorage.getItem('user_id'));
            }else {
                this.props.fetchAllPositions();
            }
        }
    }

   
    
    render() {
        
        const usertype = localStorage.getItem('user_type');
        return (
            <div class="ui segment">
                <h2> Advertised Positions </h2>
                {this.props.positions.map( position => 
                <div>
                    <AdvertisedPosition {...position} usertype={usertype} /> 
                    <br/>
                </div>
                )}

                <br/>
                {usertype === 'employer' ? ( 
                    <div>
                        <Link to= '/employer/add-position'>
                            <button id='form-button-control-public' class='ui button'>
                                Add Position
                            </button>
                        </Link>
                    </div>
                    ) : null }
            </div>
        );
    }

    
}

AdvertisedPositions.propTypes = {
    fetchAllPositions: PropTypes.func.isRequired,
    fetchEmployersPositions: PropTypes.func.isRequired,
    positions: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    positions: state.positions.items
});

export default connect(mapStateToProps, {fetchAllPositions, fetchEmployersPositions})(AdvertisedPositions);