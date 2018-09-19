import React from 'react';
import { Link } from 'react-router-dom';

export default class AdvertisedPosition extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.positionName}</h3>
                <p>{this.props.description}</p>
                <Link
                    to={{
                        pathname: `/${this.props.usertype}/job-info/${this.props._id}`,
                        }}
                >
                    View
                </Link>
            </div>
        );
    }



}
