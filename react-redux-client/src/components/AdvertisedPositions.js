import React from 'react';
import AdvertisedPosition from './AdvertisedPosition';

export default class AdvertisedPositions extends React.Component {
    render() {
        return (
            <div>
                <h2> Advertised Positions </h2>
                {positionData.map( position => <AdvertisedPosition {...position} />)}
            </div>
        );
    }
}

let positionData = [
  {name: "Junior programmer"},
  {name: "Senior developer"},
  {name: "UX dude"}
];