import React from 'react';
import styled from 'styled-components';
import { Clock } from '../atoms';

const ClockWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
    width: 30%;
    height: 20vh;
`;

export const ClockBlock = () => {
    return (
        <ClockWrapper>
            <Clock />
        </ClockWrapper>
    );
};

