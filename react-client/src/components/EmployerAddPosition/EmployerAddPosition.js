import React from 'react';
import { connect } from 'react-redux';
import { employerAddPosition } from '../../actions/positionActions';

class EmployerAddPosition extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            positionToAdd: {
                positionName: '',
                description: '',
                employerId: '',
            },
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    //When the user clicks the register button this is called, which dispatches an action
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
                    <h1>Add A Position</h1>
                    <div class='field'>
                        <div class='field'>
                            <label for="positionName"><b>Position Title</b></label>
                            <div class='ui input'>
                                <input type="text" placeholder="Enter position title" name="positionName" required onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div class='field'>
                            <label for="description"><b>Description</b></label>
                            <div class='ui input'>
                                <input type="text" placeholder="Enter position description" name="description" required onChange={this.handleChange}/>
                            </div>
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


export default connect(null)(EmployerAddPosition);