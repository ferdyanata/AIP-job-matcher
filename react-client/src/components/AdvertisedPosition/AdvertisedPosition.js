import React from 'react';
import { Link } from 'react-router-dom';
import { truncateString } from '../../helpers/truncate';

export default class AdvertisedPosition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: ""
        };
    }
    componentDidMount() {
        //Fetch the company name who advertised this job
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
        //Shorten descriptions that are too long
        var description = truncateString(this.props.description);
        return (
            <div>
                <h3>{this.props.positionName}</h3>
                <h4>{this.state.companyName}</h4>
                <p>{description}</p>
                <Link
                    to={{
                        pathname: `/position/${this.props._id}`,
                    }}>
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
    }
}
