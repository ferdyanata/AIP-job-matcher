import React from 'react';
import AppliedMatchedDetails from "../AppliedMatchedDetails/AppliedMatchedDetails";
import PositionApplication from "../PositionApplication/PositionApplication";
import { connect } from 'react-redux';
import { fetchPosition } from '../../actions/positionActions';

class JobInfo extends React.Component {


    componentWillMount() {
        this.props.fetchPosition(this.props.match.params.id);
    }

    render() {
        const usertype = this.props.match.params.usertype;
        return (
            <div class="ui segment">
                <h3>{this.props.position.positionName}</h3>
                <p>{this.props.position.description}</p>
                <br/>
                {usertype === 'employer' ? ( <AppliedMatchedDetails/>) : <PositionApplication position={this.props.position}/>}
                                     
            </div>
        );
    }
}


const mapStateToProps = state => ({
    position: state.positions.item
});

export default connect(mapStateToProps, {fetchPosition})(JobInfo);