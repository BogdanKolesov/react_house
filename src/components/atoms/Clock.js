import React, { useState } from 'react'
import styled from 'styled-components';

const ClockBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ClockHours = styled.p`
    font-size: ${props => props.theme.sizes.fonts.big};
    margin-bottom: 5px;
    color: ${props => props.theme.colors.text};
`;

const ClockDate = styled.p`
    font-size: ${props => props.theme.sizes.fonts.small};
    width: 100%;
    text-align: right;
    color: ${props => props.theme.colors.text};
`

export const Clock = props => {
    const [date, setDate] = React.useState(new Date());

    //Replaces componentDidMount and componentWillUnmount
    React.useEffect(() => {
        var timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date());
    }

    return (
        <ClockBlock>
            <ClockHours>{date.toLocaleTimeString()}</ClockHours>
            <ClockDate>{date.toLocaleDateString()}</ClockDate>
        </ClockBlock>
    );
}