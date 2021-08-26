import React, { useState } from 'react'
import styled from 'styled-components';
import { ActiveBackground, RangeSlider, Wrapper } from '../atoms';
import { FaRegLightbulb } from "react-icons/fa";

const RangeActionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: ${({ big }) => big ? '30%' : '20%'};
    height: ${({ big }) => big ? '30vh' : '20vh'};
    /* flex-direction: column; */
`;


const SliderBlock = styled.div`
    width: 20%;
    height: 100%;
    background-color: yellow;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentBlock = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    z-index: 1;
    font-size: 50px;
`;

export const RangeActionBlock = () => {
    return (
        <>
            <RangeActionWrapper>
                <ActiveBackground />
                <ContentBlock>
                    <FaRegLightbulb />
                </ContentBlock>
                <SliderBlock>
                    <RangeSlider />
                </SliderBlock>
            </RangeActionWrapper>
        </>
    );
};

