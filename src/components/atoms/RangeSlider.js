import React, { useState } from 'react';
import styled from 'styled-components';

const Range = styled.input`
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical; /* WebKit */
    z-index: 1;
    width: 100px;
`

export const RangeSlider = () => {
    const [value, setValue] = useState(0);

    const handleClick = (e) => {
        setValue(e.target.value);
        console.log(value);
    };



    return (
        <Range type="range" orient="vertical" min="0" max="100" step="0.01" value={value} onInput={handleClick} />
    );
};

