import styled from 'styled-components';
import React from 'react';

const RoomWrapper = styled.div`
    background-color: ${props => props.theme.colors.lightPrimary};
    width: 90%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: ${props => props.theme.sizes.fonts.big};
    color: ${props => props.theme.colors.text};
`;

export const RoomSelect = ({ content }) => {
    return (
        <RoomWrapper>
            {content}
        </RoomWrapper>
    );
};

