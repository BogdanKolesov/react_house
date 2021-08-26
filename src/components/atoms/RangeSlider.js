import React from 'react';
import styled from 'styled-components';

const Range = styled.input`
    margin-top: 20px;
    background-color: red;
    z-index: 1;
    transform: rotate(-90deg);
    width: 100px;
`

export const RangeSlider = () => {
    return (
        <Range type="range" min="0" max="1" step="any" />
    );
};

