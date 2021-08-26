import React, { useState } from 'react'
import styled from 'styled-components';
import { ActiveBackground, RangeSlider, Wrapper } from '../atoms';

const RangeActionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: ${({ big }) => big ? '400px' : '200px'};
    height: ${({ big }) => big ? '200px' : '100px'};
    flex-direction: column;
`;





export const RangeActionBlock = ({ content }) => {
    return (
        <>
            <RangeActionWrapper>
                <ActiveBackground />
                <Wrapper>
                    {content}
                </Wrapper>
                <RangeSlider />
            </RangeActionWrapper>
        </>
    );
};

