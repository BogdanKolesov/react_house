import styled from 'styled-components';
import React, { useState } from 'react';

const CheckboxWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: ${props => props.theme.sizes.blocks.small};
    height: 200px;
    background-color: aliceblue;
`;

const CheckboxItem = styled.div`
    background-color: red;
    width: 50px;
    height: 50px;
    font-size: ${props => props.theme.sizes.fonts.medium};
`;

export const CheckboxBlock = () => {
    const [check, setCheck] = useState(false);

    const handleClick = () => {
        setCheck(!check);
    };

    check ? console.log('true') : console.log('false');

    return (
        <CheckboxWrapper>
            <CheckboxItem onClick={() => handleClick()} />
        </CheckboxWrapper>
    );
};
