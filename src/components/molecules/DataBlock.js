import React from 'react';
import styled from 'styled-components';

const DataWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    color: #fff;
    width: ${props => props.theme.sizes.blocks.big};
    height: 20vh;
    font-size: ${props => props.theme.sizes.fonts.medium};
`;

export const DataBlock = ({ content }) => {
    return (
        <DataWrapper><p>{content}</p></DataWrapper>
    );
};
