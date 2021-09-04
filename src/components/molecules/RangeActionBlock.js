import React, { useState } from 'react'
import styled from 'styled-components';
import { ActiveBackground, RangeSlider, Wrapper } from '../atoms';
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import { connect } from 'react-redux';
import { valueChanged } from '../../actions/'


const RangeActionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 35%;
    min-width: 150px;
    height: auto;
    margin: 5px;
    /* flex-direction: column; */
`;


const SliderBlock = styled.div`
    width: 20%;

    background-color: ${props => props.theme.colors.lightPrimary};
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
                    {RangeSlider.RangeValue > 5 ? <FaLightbulb /> : <FaRegLightbulb />}
                </ContentBlock>
                <SliderBlock>
                    <RangeSlider />
                </SliderBlock>
            </RangeActionWrapper>
        </>
    );
};

const mapStateToProps = ({ items }) => {
    return {
        items
    }
}

const mapDispathToProps = {
    valueChanged
};

export default connect(mapStateToProps, mapDispathToProps)(RangeActionBlock);