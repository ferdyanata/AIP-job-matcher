import React from 'react';
import AppliedMatchedDetailsItem from './AppliedMatchedDetailsItem'

export default class AppliedMatchedDetails extends React.Component {
    render() {
        return (
            <div>
                <table class="Matches">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Applied?</th>
                            <th>Matched?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeAppliedMatchedData.map( employee =>
                            <AppliedMatchedDetailsItem {...employee}/>
                        )}
                    </tbody>
                </table>
                <br/>
            </div>
        );
    }
}

let employeeAppliedMatchedData = [
    {employeeName: "Ferdy",
    applied: true,
    matched: true},
    {employeeName: "John Smiths Chips",
    applied: true,
    matched: false},
    {employeeName: "George Mclewqeqweq",
    applied: false,
    matched: true},
    {employeeName: "Brendan",
    applied: false,
    matched: true},
    
]