import React from 'react';
import styled from 'styled-components';
import { Group } from '../../atoms';
import { ClockBlock, RangeActionBlock, DataBlock } from '../../molecules';


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
                <DataBlock content='20 oC' />
                <DataBlock content='50%' />
            </Group>
            <Group>
                <RangeActionBlock />
                <RangeActionBlock />
                <RangeActionBlock />
                <RangeActionBlock />
            </Group>


        </FlexBlock>
    );
};

export default RoomOne;