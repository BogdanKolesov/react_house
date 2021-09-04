import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    height: auto;
    min-height: 150px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.theme.colors.accent};
`;

export const HomeWeatherTitle = styled.h2`
    color: ${props => props.theme.colors.text};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const HomeWeatherItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const HomeWeatherItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33%;
    border: 1px solid ${props => props.theme.colors.text};
`;

export const HomeWeatherItemTitle = styled.h3`
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.sizes.fonts.small};
`;

export const HomeWeatherItemValue = styled.p`
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.sizes.fonts.medium};
`;