import React from 'react';
import Applicants from "../Applicants/Applicants";
import PositionApplication from "../PositionApplication/PositionApplication";
import { connect } from 'react-redux';
import { fetchPosition } from '../../actions/positionActions';
import { Link } from 'react-router-dom';
import { getSkillsList } from '../../helpers/skillsList';

class JobInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            applied: false
        };
    }

    componentDidMount() {
        const positionId = this.props.match.params.id;
        this.props.fetchPosition(positionId);

        //Determine if talent has applied to this position
        if (localStorage.getItem('user_type') === 'talent') {
            fetch(`/api/application/${localStorage.getItem('user_id')}/${positionId}`)
                .then(res => res.json())
                .then(application => {
                    this.setState({
                        applied: (application != null)
                    });
                },
                error => {
                    console.log(error);
                });
        }
    }

    render() {
        if (this.props.position) {
            return (
                <div class="ui segment">
                    <h3>{this.props.position.positionName}</h3>
                    <p>{this.props.position.description}</p>
                    <p>Desired skills: {getSkillsList(this.props.position.desiredSkills)}</p>
                    <br />
                    {localStorage.getItem('user_type') === 'employer' ?
                        (
                            <div>
                                <EmployerEditPositionButton position={this.props.position} />
                                <Applicants positionId={this.props.match.params.id} />
                            </div>
                        )
                        :
                        <Application position={this.props.position} applied={this.state.applied} />
                    }

                </div>
            );
        }
        else {
            return (<div>Position does not exist.</div>);
        }
    }
}

function Application(props) {
    if (props.applied) {
        return <p>You have applied to this position.</p>;
    } else {
        return <PositionApplication position={props.position} />;
    }
}

function EmployerEditPositionButton(props) {
    return (
        <Link to={{
            pathname: `/edit-position/${props.position._id}`,
            state: { position: props.position }
        }}>
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