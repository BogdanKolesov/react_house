import React from 'react';
import styled from 'styled-components';

const Range = styled.input`
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical; /* WebKit */
    z-index: 1;
    width: 100px;
 

`

export const RangeSlider = () => {
    return (
        <Range type="range" orient="vertical" min="0" max="1" step="any" />
    );
};

