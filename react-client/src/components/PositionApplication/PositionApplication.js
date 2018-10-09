import React from 'react';
import { connect } from 'react-redux';
import { applyToPosition } from '../../actions/applicationActions'
import { TextArea } from 'semantic-ui-react'
import { alertActions } from '../../actions/alertActions';

class PositionApplication extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            application: {
                messageToEmployer: '',
                positionId: ''
            }
        };
        this.handleApplicationChange = this.handleApplicationChange.bind(this);
        this.handleApplicationSubmit = this.handleApplicationSubmit.bind(this);
        
    }

    handleApplicationChange(event) {
        const { name, value } = event.target;
        const { application } = this.state;
        this.setState({
            application: {
                ...application,
                positionId: this.props.position._id,
                talentId: localStorage.getItem('user_id'),
                [name]: value
            }
        });
        
    }

    handleApplicationSubmit(event) {
        event.preventDefault();
        const { application } = this.state;
        const { dispatch } = this.props;
        if (application.messageToEmployer) {
            dispatch(applyToPosition(application));
        } else {
            dispatch(alertActions.error('Please write a message for the employer.'));
        }
    }

    render() {
        
        return (
            <div>
                <form className="ui form" onSubmit={this.handleApplicationSubmit}>
                    <h2>Apply</h2>
                    <div className='field'>
                        <label for="messageToEmployer"><b>Message To Employer</b></label>
                        <div className='ui input'>
                        <TextArea autoHeight placeholder="Write a message to the employer about why you applied" name="messageToEmployer" required onChange={this.handleApplicationChange}/>
                        </div>
                    </div>
                    <div className='field'>
                        <button id='form-button-control-public' className='ui button'>
                            Send
                    </button>
                    </div>
                </form>
            </div>
        )
    }

}
export default connect()(PositionApplication);