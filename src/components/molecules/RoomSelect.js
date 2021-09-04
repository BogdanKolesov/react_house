import styled from 'styled-components';
import React from 'react';


const RoomSelection = styled.select`
    width: 90%;
    height: 8vh;
    min-height: 30px;
    font-size: ${props => props.theme.sizes.fonts.big};
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    border: none;
    
`;

export const RoomSelect = ({ content }) => {
    return (
        <RoomSelection>
            <option selected value="room-one">Комната 1</option>
            <option value="room-two">Комната 2</option>
            <option value="room-three">Комната 3</option>
            <option value="room-four">Комната 4</option>
        </RoomSelection>
    );
};

