import styled from 'styled-components';

export const Group = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: ${({ big }) => big ? '40%' : '30%'};
    height: auto;
`;



