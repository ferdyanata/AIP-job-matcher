import React from 'react';
import { connect } from 'react-redux';
import { employerAddPosition } from '../../actions/positionActions';
import { Dropdown } from 'semantic-ui-react';
import { skills } from '../../data/skills';
import history from '../../helpers/history';
import { TextArea } from 'semantic-ui-react'
import { convertDropdownDataToArray } from '../../helpers/dropDownDataHelper';

class EmployerAddPosition extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            positionToAdd: {
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

    //Check if users session is valid and user is employer
    componentWillMount() {
        if (!localStorage.getItem('user_id')
         || !localStorage.getItem('user_type')
         || localStorage.getItem('user_type') != 'employer') {
            history.push('/');
            console.log('invalid session');
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { positionToAdd } = this.state;
        this.setState({
            positionToAdd: {
                ...positionToAdd,
                [name]: value
            }
        });
    }

    handleSkillsChange(event, data) {
        const { positionToAdd } = this.state;
        this.setState({
            positionToAdd: {
                ...positionToAdd,
                desiredSkills: convertDropdownDataToArray(data)
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { positionToAdd } = this.state;
        const { dispatch } = this.props;
        if (positionToAdd.positionName && positionToAdd.description) {
            dispatch(employerAddPosition(positionToAdd));
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
                                <input type="text" placeholder="Enter position title" name="positionName" 
                                    required onChange={this.handleChange} />
                            </div>
                        </div>
                        <div class='field'>
                            <label for="description"><b>Description</b></label>
                            <TextArea autoHeight placeholder='Enter position description' name="description"
                                 required onChange={this.handleChange} />
                        </div>
                        <div className='field'>
                            <label for="skills">Desired Skills</label>
                            <Dropdown placeholder='Skills' name='skills' fluid multiple selection options={skills} 
                                onChange={this.handleSkillsChange} />
                        </div>
                        <div class='field'>
                            <button id='form-button-control-public' class='ui button'>
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}


export default connect()(EmployerAddPosition);