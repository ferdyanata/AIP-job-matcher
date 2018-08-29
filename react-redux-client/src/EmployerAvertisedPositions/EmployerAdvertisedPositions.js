import React from 'react';
import AdvertisedPosition from '../AdvertisedPosition/AdvertisedPosition';

export default class AdvertisedPositions extends React.Component {
    render() {
        return (
            <div class="ui segment">
                <h2> Advertised Positions </h2>
                {positionData.map( position => 
                <div>
                    <AdvertisedPosition {...position} /> 
                    <br/>
                </div>
                )}
            </div>
        );
    }
}

let positionData = [
  {name: "Junior programmer",
    description: "Really cool position in a hip new office as a junior programmer."},
  {name: "Senior developer",
    description: "Be a SENIOR developer, above all those FILTHY juniors."},
  {name: "UX dude",
    description: "Get to know our users from all angles. Find out their blood type and deepest secrets."}
];