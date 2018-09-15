import React from 'react';

export default class AppliedMatchedDetailsItem extends React.Component {
    render() {
        return (
            <tr>
                <td><img src="/images/avatar2/small/lena.png" class="ui mini rounded image" alt="img"/></td>
                <td>{this.props.employeeName}</td>
                <td class="center aligned"> 
                    {this.props.applied ? <i class="large green checkmark icon"/> : <i/>}
                </td>
                <td class="center aligned"> 
                    {this.props.matched ? <i class="large green checkmark icon"/> : <i/>}
                </td>
                <td>
                    <button>ACCEPT</button>
                    or
                    <button>DECLINE</button>
                </td>
            </tr>
        );
    }

    checkIfApplied(){
        if (this.props.applied){
            return <i class="large green checkmark icon"/>
        }
    }
}