import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { GlobalTheme, DarkBlueTheme, BlueTheme, DarkYellowTheme, GreenTheme } from '../../themes';
import { RangeSlider, Time, CalendarDays } from '../../atoms/';
import { RangeActionBlock } from '../../molecules/';



const Test = styled.div`
    background-color:  ${props => props.theme.colors.primary};
    width: 100px;
    height: 100px;
`;

function App() {
    return (
        <ThemeProvider theme={DarkBlueTheme}>
            <GlobalTheme />
            <RangeActionBlock content={Time} />
        </ThemeProvider>
    );
}

export default App;
