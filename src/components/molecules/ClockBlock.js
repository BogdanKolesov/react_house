import React from 'react';
import styled from 'styled-components';
import { Clock } from '../atoms';

const ClockWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
    width: 90%;
    height: 20vh;
    margin-bottom: 10px;
`;

export const ClockBlock = () => {
    return (
        <ClockWrapper>
            <Clock />
        </ClockWrapper>
    );
};

