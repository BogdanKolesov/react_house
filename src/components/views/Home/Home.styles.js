import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* padding: 10px; */

`

export const RoomsContainer = styled.div`
    display: flex;
    width: 80%;
    height: auto;
    flex-wrap: wrap;
`

export const OutsideContainer = styled.div`
    display: flex: 
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    padding: 20px;
    background-color: ${COLORS.gray}
`