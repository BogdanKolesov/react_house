import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';

export const NavContainer = styled.nav`
    position: static;
    left: 0;
    top: 0;
    max-width: 80px;
    height: 89.5vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const NavContent = styled.div`
    height: 100%;
    width: 100%;
`

export const NavContentItem = styled.div`
    background-color: ${props => props.color};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        flex: 3;
    }
`

export const NavIcon = styled.div`
    font-size: 50px;
`

export const NavText = styled.span`
    font-size: 20px;
    font-family: 'Roboto Thin';
    text-align: center;
`