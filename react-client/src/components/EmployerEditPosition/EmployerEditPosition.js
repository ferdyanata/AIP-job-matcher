import React from 'react';
import { connect } from 'react-redux';
import { employerEditPosition } from '../../actions/positionActions';
import { Dropdown } from 'semantic-ui-react';
import { skills } from '../../data/skills';
import history from '../../helpers/history';
import { fetchPosition } from '../../actions/positionActions';


class EmployerEditPosition extends React.Component {
    componentWillMount() {
        this.props.fetchPosition(this.props.match.params.id);
    }

    constructor(props) {
        super(props);
        this.state = {
            positionToEdit: {
                positionName: '',
                description: '',
                employerId: localStorage.getItem('user_id'),
                desiredSkills: []
            },
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSkillsChange = this.handleSkillsChange.bind(this);
    }

    //Check if users session is valid
    componentDidMount() {
        if (!localStorage.getItem('user_id') || !localStorage.getItem('user_type')) {
            history.push('/');
            console.log('invalid session');
        }

    }

    handleChange(event) {
        const { name, value } = event.target;
        const { positionToEdit } = this.state;
        this.setState({
            positionToEdit: {
                ...positionToEdit,
                [name]: value
            }
        });
    }
    handleSkillsChange(event, data) {

        //The values selected by the user in the dropdown
        var valuesFromDropdown = data.value;

        //skills to insert into our talentToRegister object
        var skills = [];

        //copy data to our skills array
        for (var i in valuesFromDropdown) {
            skills[i] = valuesFromDropdown[i];
        }

        const { positionToEdit } = this.state;
        this.setState({
            positionToEdit: {
                ...positionToEdit,
                desiredSkills: skills
            }
        });
    }
    //When the user clicks the register button this is called, which dispatches an action
    handleSubmit(event) {
        event.preventDefault();
        const { positionToEdit } = this.state;
        const { dispatch } = this.props;
        if (positionToEdit.positionName && positionToEdit.description) {
            dispatch(employerEditPosition(positionToEdit));
        }
    }

    render() {
        return (
            <div>
                <form class="ui form" onSubmit={this.handleSubmit}>
                    <h1>Add Position</h1>
                    <div class='field'>
                        <div class='field'>
                            <label for="positionName"><b>Position Title</b></label>
                            <div class='ui input'>
                                <input type="text" placeholder="Enter position title" name="positionName" required onChange={this.handleChange} value={this.props.position.positionName}/>
                            </div>
                        </div>
                        <div class='field'>
                            <label for="description"><b>Description</b></label>
                            <div class='ui input'>
                                <input type="text" placeholder="Enter position description" name="description" required onChange={this.handleChange} value={this.props.position.description}/>
                            </div>
                        </div>
                        <div className='field'>
                            <label for="skills">Desired Skills</label>
                            <Dropdown placeholder='Skills' name='skills' fluid multiple selection options={skills} onChange={this.handleSkillsChange} value={this.props.position.desiredSkills}/>
                        </div>  
                        <div class='field'>
                            <button id='form-button-control-public' class='ui button'>
                                Edit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}
const mapStateToProps = state => ({
    position: state.positions.item
});

export default connect(mapStateToProps, {fetchPosition})(EmployerEditPosition);