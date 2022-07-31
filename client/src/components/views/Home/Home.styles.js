import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    /* padding: 10px; */

`

export const ContentContainer = styled.div`
    display: flex;
    
`

export const RoomsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const OutsideContainer = styled.div`
    display: flex: 
    width: 100%;
    height: 5vh;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    padding: 10px;
    background-color: ${COLORS.gray}
`