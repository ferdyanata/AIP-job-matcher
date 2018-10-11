import React from 'react';
import { connect } from 'react-redux';
import { employerEditPosition, employerDeletePosition } from '../../actions/positionActions';
import { Dropdown } from 'semantic-ui-react';
import { skills } from '../../data/skills';
import history from '../../helpers/history';
import { TextArea } from 'semantic-ui-react'


class EmployerEditPosition extends React.Component {

    constructor(props) {
        super(props);
        const { position } = props.location.state;

        this.state = {
            positionToEdit: {
                positionName: position.positionName,
                description: position.description,
                desiredSkills: position.desiredSkills
            },
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSkillsChange = this.handleSkillsChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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
            dispatch(employerEditPosition(positionToEdit, this.props.match.params.id));
        }
    }

    handleDelete(event) {
        console.log('delete');
        const { dispatch } = this.props;
        dispatch(employerDeletePosition(this.props.match.params.id));
    }

    render() {
        const { position } = this.props.location.state;
        return (
            <div>
                <form class="ui form" onSubmit={this.handleSubmit}>
                    <h1>Edit Position</h1>
                    <div class='field'>
                        <div class='field'>
                            <label for="positionName"><b>Position Title</b></label>
                            <div class='ui input'>
                                <input type="text" placeholder="Enter position title" name="positionName" required onChange={this.handleChange} defaultValue={position.positionName} />
                            </div>
                        </div>
                        <div class='field'>
                            <label for="description"><b>Description</b></label>
                            <div class='ui input'>
                                <TextArea autoHeight placeholder="Enter position description" name="description" required onChange={this.handleChange} defaultValue={position.description} />
                            </div>
                        </div>
                        <div className='field'>
                            <label for="skills">Desired Skills</label>
                            <Dropdown placeholder='Skills' name='skills' fluid multiple selection options={skills} onChange={this.handleSkillsChange} defaultValue={position.desiredSkills} />
                        </div>
                        <div class='field'>
                            <button id='form-button-control-public' class='ui primary button'>
                                <i class="pencil icon"></i> <span>Edit</span>
                            </button>
                        </div>
                    </div>
                </form>

                <button class='ui icon button red' onClick={(e) => { if (window.confirm('Are you sure you wish to delete this position?')) this.handleDelete(e) }}>
                    <i class="trash icon"></i> <span>Delete</span>
                </button>

            </div>
        );
    }

}

export default connect()(EmployerEditPosition);