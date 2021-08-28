import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { GlobalTheme, DarkBlueTheme, BlueTheme, DarkYellowTheme, GreenTheme } from '../../themes';
import RoomOne from '../RoomOne';
import { RangeSlider, Time, CalendarDays, Clock } from '../../atoms/';
import { RangeActionBlock } from '../../molecules';
import Img from '../../../profile.jpg';




// const Test = styled.div`
//     background-color:  ${props => props.theme.colors.primary};
//     width: 100px;
//     height: 100px;
// `;

const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    
    
    
`;

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-image: url(${Img});
    filter: blur(20px);
    bottom: 0;
    right: 0;
    z-index: -1;
`;
function App() {
    return (
        <ThemeProvider theme={DarkBlueTheme}>
            <GlobalTheme />
            <AppWrapper>
                <Background />
                <RoomOne />
            </AppWrapper>

        </ThemeProvider>
    );
}

export default App;
