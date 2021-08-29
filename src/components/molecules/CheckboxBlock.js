import styled from 'styled-components';
import React, { useState } from 'react';

const CheckboxWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: ${props => props.theme.sizes.blocks.small};
    height: 200px;
    background-color: ${props => props.theme.colors.primary};
`;

const CheckboxItem = styled.div`
    background-color: ${({ check }) => check ? 'red' : 'blue'}; //TODO! colors
    width: 50px;
    height: 50px;
    font-size: ${props => props.theme.sizes.fonts.medium};
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
