import React from 'react';
import '../../css/AppliedMatchedDetailsItem.css';
import { Header, Table } from 'semantic-ui-react'
import ReactTextCollapse from 'react-text-collapse';


export default class AppliedMatchedDetailsItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            talent: null
        };
    }

    componentDidMount() {
        fetch(`/api/talent/${this.props.talentId}`)
            .then(res => res.json())
            .then(
                talent => {
                    this.setState({
                        talent: talent
                    });
                },
                error => {
                    console.log(error);
                }
            );
    }

    render() {
        var { messageToEmployer } = this.props;
        const TEXT_COLLAPSE_OPTIONS = {
            collapse: false, // default state when component rendered
            collapseText: '... show more', // text to show when collapsed
            expandText: 'show less', // text to show when expanded
            minHeight: 50, // component height when closed
            maxHeight: 150 // expanded to
        }

        if (this.state.talent) {
            return (
                <Table.Row>
                    <Table.Cell>
                        <Header as='h4'>
                            <Header.Content>
                                {this.state.talent.fullName}
                            </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell>
                        <Header as='h4'>
                            <Header.Content>
                                <ReactTextCollapse
                                    options={TEXT_COLLAPSE_OPTIONS}>
                                    {messageToEmployer}
                                </ReactTextCollapse>
                            </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell>
                        <Header as='h4'>
                            <Header.Content>
                                {this.skillsList()}
                            </Header.Content>
                        </Header>
                    </Table.Cell>
                </Table.Row>
            );
        }
        else {
            return (<p> Loading Talent Info</p>);
        }

    }

    skillsList = () => {
        var skillsListString = "";
        var { skills } = this.state.talent;

        if (skills) {
            for (var i = 0; i < skills.length; i++) {
                skillsListString += (skills[i]);
                //If final element dont add comma
                if (i + 1 !== skills.length) {
                    skillsListString += ", ";
                }
            }
        }
        return skillsListString;
    }
}