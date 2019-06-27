import React from 'react';
import NormalHead from './normalHead'

const images = [
    'IMG-0003-00122.jpg',
    'IMG-0003-00123.jpg',

];

function WheelBrain() {
    return(
        <div>
            <NormalHead images={images} />
        </div>
    )
}
export default WheelBrain