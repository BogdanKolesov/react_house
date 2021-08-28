import styled from 'styled-components';
import React from 'react';

const RoomWrapper = styled.div`
    background-color: red;
    width: 90%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const RoomSelect = ({ content }) => {
    return (
        <RoomWrapper>
            {content}
        </RoomWrapper>
    );
};

