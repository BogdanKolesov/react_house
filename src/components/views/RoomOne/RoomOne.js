import React from 'react';
import styled from 'styled-components';
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
            <ClockBlock />
            <RangeActionBlock />
            <RangeActionBlock />
            <DataBlock content='20 oC' />
            <DataBlock content='50%' />
        </FlexBlock>
    );
};

export default RoomOne;