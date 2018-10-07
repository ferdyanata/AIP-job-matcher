import React from 'react';
import Applicants from "../Applicants/Applicants";
import PositionApplication from "../PositionApplication/PositionApplication";
import { connect } from 'react-redux';
import { fetchPosition } from '../../actions/positionActions';
import { Header, Table } from 'semantic-ui-react'

class JobInfo extends React.Component {
    componentWillMount() {
        this.props.fetchPosition(this.props.match.params.id);
    }

    desiredSkillsList = () => {
        var {desiredSkills} = this.props.position
        let listArray = [desiredSkills]

        for(let i = 0; i < 100; i++){
            let children = []
            for (let j = 0; j < listArray.length[i]; j++){
                children.push(<Table.Cell>{desiredSkills}</Table.Cell>)
            }
            listArray.push(<Table.Row>{children}</Table.Row>)
        }
        return listArray
    }


    render() {
        const usertype = localStorage.getItem('user_type');
        return (
            <div class="ui segment">
                <h3>{this.props.position.positionName}</h3>
                <p>{this.props.position.description}</p>
                <p>{this.desiredSkillsList()}</p>
                <br />
                {usertype === 'employer' ? (<Applicants />) : <PositionApplication position={this.props.position} />}

            </div>
        );
    }
}


const mapStateToProps = state => ({
    position: state.positions.item
});

export default connect(mapStateToProps, { fetchPosition })(JobInfo);