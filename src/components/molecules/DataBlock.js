import React from 'react';
import styled from 'styled-components';

const DataWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    color: #fff;
    width: 15%;
    height: 20vh;
    margin-left: 10px;
`;

export const DataBlock = ({ content }) => {
    return (
        <DataWrapper><p>{content}</p></DataWrapper>
    );
};
