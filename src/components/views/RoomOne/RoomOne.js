import React from 'react';
import styled from 'styled-components';
import { Group } from '../../atoms';
import { ClockBlock, RangeActionBlock, DataBlock, RoomSelect, CheckboxBlock } from '../../molecules';
import HomeWeather from '../../organismes/HomeWeather/HomeWeather';


const FlexBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    justify-content: space-around;
    align-items: center;
`;

const RoomOne = () => {
    return (
        <FlexBlock>
            <Group big>
                <ClockBlock />
                <HomeWeather />
            </Group>

            <Group>
                <RangeActionBlock />
                <RangeActionBlock />
                <RangeActionBlock />
                <RangeActionBlock />
            </Group>
            <Group big>
                <RoomSelect />
            </Group>
            <Group>
                <CheckboxBlock />
                <CheckboxBlock />
                <CheckboxBlock />
                <CheckboxBlock />
            </Group>


        </FlexBlock>
    );
};

export default RoomOne;