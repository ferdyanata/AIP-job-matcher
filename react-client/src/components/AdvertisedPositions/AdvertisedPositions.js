import React from 'react';
import AdvertisedPosition from '../AdvertisedPosition/AdvertisedPosition';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllPositions } from '../../actions/positionActions';
import { Link } from 'react-router-dom';


class AdvertisedPositions extends React.Component {

    componentWillMount() {
        this.props.fetchAllPositions();
    }
    
    render() {
        const usertype = this.props.match.params.usertype;        
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
                    <p>EMPLOYER hi</p>
                        <Link to= '/employer/add-position'>
                            <button id='form-button-control-public' class='ui button'>
                                Add Position
                            </button>
                        </Link>
                    </div>
                    ) : 
                <p>Employees dont get to add positions! </p>}
            </div>
        );
    }

    
}

AdvertisedPositions.propTypes = {
    fetchAllPositions: PropTypes.func.isRequired,
    positions: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    positions: state.positions.items
});

export default connect(mapStateToProps, {fetchAllPositions})(AdvertisedPositions);