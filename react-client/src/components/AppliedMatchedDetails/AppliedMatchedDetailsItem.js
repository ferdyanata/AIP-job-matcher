import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/AppliedMatchedDetailsItem.css';

export default class AppliedMatchedDetailsItem extends React.Component {
    render() {
        var { positionId, messageToEmployer } = this.props;

        const pStyle = {
            fontSize: '15px',
            textAlign: 'center'
        };

        return (
            <div>
                <tr>
                    <td>
                        {/* <Link
                        to={{
                            // this will link to the user profile details and their skills
                            pathname: `/job-info/${this.props._id}`,
                        }}
                    >
                        Ferdy {talentName}
                    </Link> */}
                        {positionId}
                    </td>
                    <br />
                    <td style={pStyle}>
                        {messageToEmployer}
                    </td>
                </tr>
            </div>
        );
    }
}