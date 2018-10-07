import React from 'react';
import Applicants from "../Applicants/Applicants";
import PositionApplication from "../PositionApplication/PositionApplication";
import { connect } from 'react-redux';
import { fetchPosition } from '../../actions/positionActions';

class JobInfo extends React.Component {


    componentWillMount() {
        this.props.fetchPosition(this.props.match.params.id);
    }

    render() {
        const usertype = localStorage.getItem('user_type');
        return (
            <div class="ui segment">
                <h3>{this.props.position.positionName}</h3>
                <p>{this.props.position.description}</p>
                {/* Show skills here in a list
                    Loop over the desiredSkills array 
                    this.props.position.desiredSkills    
                */}
                <br/>
                {usertype === 'employer' ? ( <Applicants />) : <PositionApplication position={this.props.position}/>}
                                     
            </div>
        );
    }
}


const mapStateToProps = state => ({
    position: state.positions.item
});

export default connect(mapStateToProps, {fetchPosition})(JobInfo);