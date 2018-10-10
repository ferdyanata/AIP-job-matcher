import React from 'react';
import { Link } from 'react-router-dom';

export default class AdvertisedPosition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: ""
        };
    }
    componentWillMount() {
        fetch(`/api/employer/${this.props.employerId}`)
            .then(res => res.json())
            .then(
            employer => {
                this.setState({
                    companyName: employer.companyName
                });
            }, 
            error => {
                console.log(error);
            }
            );

    }

    render() {
        var description = truncate(this.props.description);
        return (
            <div>
                <h3>{this.props.positionName}</h3>
                <h4>{this.state.companyName}</h4>
                <p>{description}</p>
                <Link
                    to={{
                        pathname: `/job-info/${this.props._id}`,
                    }}
                >
                    <div class="ui animated button" tabindex="0">
                        <div class="visible content">View</div>
                        <div class="hidden content">
                            <i class="right arrow icon"></i>
                        </div>
                    </div>
                </Link>
                <hr />
            </div>
        );

        function truncate(string) {
            if (string && string.length > 500)
                return string.substring(0, 100) + '...';
            else
                return string;
        };
    }



}
