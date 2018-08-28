import React from 'react';
import {Link} from 'react-router-dom';

export default class AdvertisedPosition extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <Link
                  to={{
                    pathname: `/job-info/${this.props.name}`,
                  }}
                >
                View
                </Link>
            </div>
        );
    }
    

    
}