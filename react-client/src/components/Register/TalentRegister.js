import React from 'react';
import { talentRegister } from '../../actions/registerActions';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { skills } from '../../data/skills';

class TalentRegister extends React.Component {
    constructor() {
        super();

        //fields get updated each time the user enters something, handled in handleChange()
        this.state = {
            talentToRegister: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                skills: [] 
            },
            submitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSkillsChange = this.handleSkillsChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { talentToRegister } = this.state;
        this.setState({
            talentToRegister: {
                ...talentToRegister,
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

        const { talentToRegister } = this.state;
        this.setState({
            talentToRegister: {
                ...talentToRegister,
                skills: skills
            }
        });
    }

    //When the user clicks the register button this is called, which dispatches an action
    handleSubmit(event) {
        event.preventDefault();
        const { talentToRegister } = this.state;
        const { dispatch } = this.props;
        if (talentToRegister.firstName && talentToRegister.lastName && talentToRegister.password && talentToRegister.email) {
            dispatch(talentRegister(talentToRegister));
            this.setState({ submitted: true });
        }
    }

    render() {
        return (
            <div>
                <form class='ui form' onSubmit={this.handleSubmit}>
                    <h1>Talent Register</h1>
                    <div className='ui grid'>
                    <div class='six wide field'>
                        <div class='field'>
                            <label for='firstName'>First name</label>
                            <div class='ui input'>
                                <input type='text' name='firstName' placeholder='First name' onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div class='field'>
                            <label for='lastName'>Last name</label>
                            <div class='ui input'>
                                <input type='text' name='lastName' placeholder='Last name' onChange={this.handleChange} />
                            </div>
                        </div>
                        <div class='field'>
                            <label for="email">Email</label>
                            <div class='ui input'>
                                <input type="text" placeholder="Enter Email" name="email" required onChange={this.handleChange} />
                            </div>
                        </div>
                        <div class='field'>
                            <label for="password">Password</label>
                            <div class='ui input'>
                                <input type="password" placeholder="Enter Password" name="password" required onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div class='field'>
                            <button id='form-button-control-public' class='ui button'>
                                Register
                            </button>
                        </div>
                    </div>
                    <div className='six wide field'>
                        <label for="skills">Skills</label>
                        <Dropdown placeholder='Skills' name='skills' fluid multiple selection options={skills} onChange={this.handleSkillsChange}/>
                    </div>
                    
                    </div>
                </form>
            </div>

        );


    }
 
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(TalentRegister);