import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../../helpers/history';
import {alertActions} from '../../actions/alertActions'

class AlertMessage extends React.Component {

    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {

        return (
            <div>
                <br/>
                {this.props.message &&
                <div className={this.props.className}>
                    <div className="header">
                        {this.props.message}
                    </div>
                </div>
                }
            </div>
          
        );
    }

}

AlertMessage.propTypes = {
    message: PropTypes.string
};

const mapStateToProps = state => ({
    className: state.alert.className,
    message: state.alert.message
});

export default connect(mapStateToProps)(AlertMessage);