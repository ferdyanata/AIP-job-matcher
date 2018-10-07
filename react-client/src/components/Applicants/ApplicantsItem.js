import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/AppliedMatchedDetailsItem.css';
import { Header, Table } from 'semantic-ui-react'
import ReactTextCollapse from 'react-text-collapse';


export default class AppliedMatchedDetailsItem extends React.Component {
    render() {
        var { positionId, messageToEmployer } = this.props;
        const TEXT_COLLAPSE_OPTIONS = {
            collapse: false, // default state when component rendered
            collapseText: '... show more', // text to show when collapsed
            expandText: 'show less', // text to show when expanded
            minHeight: 100, // component height when closed
            maxHeight: 250 // expanded to
        }

        return (
            <Table.Row>
                <Table.Cell>
                    <Header as='h4'>
                        <Header.Content>
                            {positionId}
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
            </Table.Row>
        );

    }
}