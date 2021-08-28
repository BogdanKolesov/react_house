import React from 'react';
import styled from 'styled-components';
import { Group } from '../../atoms';
import { ClockBlock, RangeActionBlock, DataBlock, RoomSelect, CheckboxBlock } from '../../molecules';


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
            <Group big>
                <RoomSelect content={'Content'}></RoomSelect>
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