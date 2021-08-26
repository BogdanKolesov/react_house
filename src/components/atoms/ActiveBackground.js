import styled from 'styled-components';

export const ActiveBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.primary};
    opacity: 1; //TODO: Link
    z-index: 0;
`;