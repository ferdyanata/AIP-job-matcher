import React from 'react';
import Applicants from "../Applicants/Applicants";
import PositionApplication from "../PositionApplication/PositionApplication";
import { connect } from 'react-redux';
import { fetchPosition } from '../../actions/positionActions';
import { Header, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
                }, 
                error => {
                    console.log(error);
                }
            );
        }   
    }

    desiredSkillsList = () => {
        //Temp solution
        var list = "Desired skills: ";
        var {desiredSkills} = this.props.position
        let listArray = [desiredSkills];

        if (desiredSkills) {
            for(var i = 0; i < desiredSkills.length; i++) {
                list += (desiredSkills[i]);
                //If final element dont add comma
                if (i+1 != desiredSkills.length) {
                    list += ", ";
                }
            }
        }

        // for(let i = 0; i < 100; i++){
        //     let children = []
        //     for (let j = 0; j < listArray.length[i]; j++){
        //         children.push(<Table.Cell>{desiredSkills}</Table.Cell>)
        //     }
        //     listArray.push(<Table.Row>{children}</Table.Row>)
        // }
        //temp
        return list;
    }


    render() {
        const usertype = localStorage.getItem('user_type');
        if (this.props.position) {
            return (
                <div class="ui segment">
                    <h3>{this.props.position.positionName}</h3>
                    <p>{this.props.position.description}</p>
                    <p>{this.desiredSkillsList()}</p>
                    <br/>
                    {usertype === 'employer' ? 
                    ( 
                        <div>
                            <EmployerEditPositionButton position={this.props.position}/> 
                            <Applicants positionId ={this.props.match.params.id}/>
                        </div>
                    ) 
                    :
                     <Application position = {this.props.position} applied = {this.state.applied}/> 
                    }
                    
                </div>
            );
        }
        else {
            return ( <div>Position does not exist.</div>);
        }
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

function EmployerEditPositionButton(props) {
    return (
        <Link to={{ pathname: `/edit-position/${props.position._id}`, state: { position: props.position } }}>
            <button className="ui button">
                Edit Position
            </button>
        </Link>
    );
}


const mapStateToProps = state => ({
    position: state.positions.item
});

export default connect(mapStateToProps, { fetchPosition })(JobInfo);