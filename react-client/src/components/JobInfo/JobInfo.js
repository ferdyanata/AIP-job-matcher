import React from 'react';
import AppliedMatchedDetails from "../AppliedMatchedDetails/AppliedMatchedDetails";
import PositionApplication from "../PositionApplication/PositionApplication";
import { connect } from 'react-redux';
import { fetchPosition } from '../../actions/positionActions';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react';


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
                <br/>
                {usertype === 'employer' ? 
                    ( 
                    <div>
                        <EmployerEditPositionButton _id={this.props.position._id}/> 
                        <AppliedMatchedDetails/>
                    </div>
                    ) 
                    :
                     <PositionApplication position={this.props.position}/>
                }
                                     
            </div>
        );
    }
}

function EmployerEditPositionButton(props) {
    return (
        <Link to={{pathname: `/edit-position/${props._id}`,}}>
            <button className="ui button">
                Edit Position
            </button>
        </Link>
    )
}

const mapStateToProps = state => ({
    position: state.positions.item
});

export default connect(mapStateToProps, {fetchPosition})(JobInfo);