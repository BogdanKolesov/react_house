import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { COLORS } from '../../../constants/colors';

export const RoomPreviewContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    height: 200px;
    width: 200px;
    border: 2px solid ${COLORS.darkBlue};
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    -webkit-box-shadow: 5px 5px 15px 5px #B1B1B1; 
    box-shadow: 5px 5px 15px 5px #B1B1B1;
    &:hover{
        border-color: ${COLORS.darkYellow};
    }
`

export const RoomName = styled.h3`
    font-size: 24px;
    font-family: 'Roboto Medium';
    color: ${COLORS.black};
    &:hover{
        
    }
`

export const RoomInfo = styled.div`
    color: ${COLORS.black};
    font-family: 'Roboto Thin';
    background-color: ${props => props.status === 'online' ? COLORS.darkGreenTransparent : COLORS.darkRedTransparent};
    border-radius: 5px;
    padding: 5px;
`

export const RoomIcon = styled.div`
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${COLORS.darkBlue};
    border-radius: 5px;
    background-color: ${props => props.status === 'online' ? COLORS.darkYellowTransparent : COLORS.red};
    width: 20px;
    height: 20px;
    font-size: 80px;
`

export const IconsContainer = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
`