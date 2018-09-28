import React from 'react';
import { connect } from 'react-redux';
import { applyToPosition } from '../../actions/applicationActions'

class PositionApplication extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            application: {
                messageToEmployer: '',
                positionId: props.position._id,
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
                [name]: value
            }
        });
    }

    handleApplicationSubmit(event) {
        event.preventDefault();
        const { application } = this.state;
        const { dispatch } = this.props;
        if (application.messageToEmployer) {
            console.log('Apply submit');
            dispatch(applyToPosition(application));
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
                            <input type="text" placeholder="Write a message to the employer about why you applied" name="messageToEmployer" required onChange={this.handleApplicationChange} />
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

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(PositionApplication);