import React from 'react';
import { Link } from 'react-router-dom';

export default class AppliedMatchedDetailsItem extends React.Component {
    render() {
        var { talentId, message } = this.props;

        return (
            <tr>
                <td></td>
                <td>
                    {/* <Link
                        to={{
                            // this will link to the user profile details and their skills
                            pathname: `/job-info/${this.props._id}`,
                        }}
                    >
                        Ferdy {talentName}
                    </Link> */}
                    Ferdy {talentId}
                </td>
                <td class="center aligned">
                    this is a message {message}
                </td>
                <td>

                </td>
            </tr>
        );
    }
}