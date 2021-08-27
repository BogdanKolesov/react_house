import React from 'react';
import styled from 'styled-components';

const DataWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    color: #fff;
    width: 40%;
    height: 20vh;
`;

export const DataBlock = ({ content }) => {
    return (
        <DataWrapper><p>{content}</p></DataWrapper>
    );
};
