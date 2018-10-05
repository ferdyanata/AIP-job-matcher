import React from 'react';
import AppliedMatchedDetails from "../AppliedMatchedDetails/AppliedMatchedDetails";
import PositionApplication from "../PositionApplication/PositionApplication";
import { connect } from 'react-redux';
import { fetchPosition } from '../../actions/positionActions';
import { alertActions } from '../../actions/alertActions';


class JobInfo extends React.Component {


    constructor(props) {
        super(props);
        this.state ={
            applied: false
        };
    }

    componentWillMount() {
        this.props.fetchPosition(this.props.match.params.id);

        if (localStorage.getItem('user_type') === 'talent') {
            fetch(`/api/application/${localStorage.getItem('user_id')}/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(
                application => {
                    var payload = false;
                    if (application){
                        payload = true;
                    }
                    this.setState({
                        applied: payload
                    });
                    console.log(application);
                }
            );
        }   
    }

    render() {
        const usertype = localStorage.getItem('user_type');
        return (
            <div class="ui segment">
                <h3>{this.props.position.positionName}</h3>
                <p>{this.props.position.description}</p>
                <br/>
                {usertype === 'employer' ? ( <AppliedMatchedDetails/>) : <Application position = {this.props.position} applied = {this.state.applied}/> //<PositionApplication position={this.props.position}/>
                
                 }
                                     
            </div>
        );
    }
}

function Application(props) {
    const applied = props.applied;
    if (applied) {
        return <p>You have applied to this position.</p>;
    } else {
        return <PositionApplication position={props.position}/>;
    }
}


const mapStateToProps = state => ({
    position: state.positions.item
});

export default connect(mapStateToProps, {fetchPosition})(JobInfo);