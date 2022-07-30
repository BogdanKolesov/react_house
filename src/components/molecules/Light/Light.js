import React, { useState } from 'react';
import { LightsCanteiner, RangeSlider } from './Light.styles';

const Lights = () => {

    const [rangeValue, setRangeValue] = useState(() => 0);


    return (
        <LightsCanteiner>
            <RangeSlider
                type="range"
                min="0"
                max="100"
                step="1"
                value={rangeValue}
                onChange={(event) => setRangeValue(event.target.value)}
            />
            <h2>{rangeValue}</h2>
        </LightsCanteiner>
    );
}

export default Lights;
