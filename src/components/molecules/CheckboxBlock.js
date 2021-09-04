import styled from 'styled-components';
import React, { useState } from 'react';

const CheckboxWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: ${props => props.theme.sizes.blocks.small};
    height: 100px;
    background-color: ${props => props.theme.colors.primary};
    min-width: 100px;
`;

const CheckboxItem = styled.div`
    background-color: ${({ check }) => check ? 'red' : 'blue'}; //TODO! colors
    width: 50px;
    height: 50px;
    font-size: ${props => props.theme.sizes.fonts.medium};
    border-radius: 50%;
`;

export const CheckboxBlock = () => {
    const [check, setCheck] = useState(false);

    const handleClick = () => {
        setCheck(!check);

    };

    return (
        <CheckboxWrapper>
            <CheckboxItem check={check} onClick={() => handleClick()} />
        </CheckboxWrapper>
    );
};
