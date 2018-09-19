import React from 'react';
import AdvertisedPosition from '../AdvertisedPosition/AdvertisedPosition';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllPositions } from '../../actions/positionActions';

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
                {usertype === 'employer' ? ( <p>EMPLOYER hi</p>) : 
                <p>Employees dont get to see who has applied! </p>}
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