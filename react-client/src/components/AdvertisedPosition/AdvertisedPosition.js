import React from 'react';
import { Link } from 'react-router-dom';

export default class AdvertisedPosition extends React.Component {
    render() {
        var description = truncate(this.props.description);
        return (
            <div>
                <h3>{this.props.positionName}</h3>
                <p>{description}</p>
                <Link
                    to={{
                        pathname: `/${this.props.usertype}/job-info/${this.props._id}`,
                        }}
                >
                    View
                </Link>
                <hr/>
            </div>
        );

        function truncate(string){
            if (string && string.length > 500)
               return string.substring(0,100)+'...';
            else
               return string;
         };
    }



}
