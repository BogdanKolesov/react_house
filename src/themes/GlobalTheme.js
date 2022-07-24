import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { COLORS } from '../constants/colors';
import { RobotoBlackWoff, RobotoBlackWoff2, RobotoBoldWoff, RobotoBoldWoff2, RobotoItalicWoff, RobotoItalicWoff2, RobotoLightItalicWoff, RobotoLightItalicWoff2, RobotoLightWoff, RobotoLightWoff2, RobotoMediumItalicWoff, RobotoMediumItalicWoff2, RobotoMediumWoff, RobotoMediumWoff2, RobotoRegularWoff, RobotoRegularWoff2, RobotoThinItalicWoff, RobotoThinItalicWoff2, RobotoThinWoff, RobotoThinWoff2 } from '../constants/fonts';





const GlobalTheme = createGlobalStyle`

    
@font-face {
    font-family: 'Roboto Black';
    src: url(${RobotoBlackWoff2}) format('woff2'),
         url(${RobotoBlackWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto Bold';
    src: url(${RobotoBoldWoff2}) format('woff2'),
         url(${RobotoBoldWoff}) format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'Roboto Italic';
    src: url(${RobotoItalicWoff2}) format('woff2'),
         url(${RobotoItalicWoff}) format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'Roboto Light';
    src: url(${RobotoLightWoff2}) format('woff2'),
         url(${RobotoLightWoff}) format('woff');
    font-weight: normal;
    font-style: normal;

}

/* @font-face {
    font-family: 'Roboto LightItalic';
    src: url(${RobotoLightItalicWoff2}) format('woff2'),
         url(${RobotoLightItalicWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
} */

@font-face {
    font-family: 'Roboto Medium';
    src: url(${RobotoMediumWoff2}) format('woff2'),
         url(${RobotoMediumWoff}) format('woff');
    font-weight: normal;
    font-style: normal;

}

/* @font-face {
    font-family: 'Roboto MediumItalic';
    src: url(${RobotoMediumItalicWoff2}) format('woff2'),
         url(${RobotoMediumItalicWoff}) format('woff');
    font-weight: normal;
    font-style: normal;

} */

@font-face {
    font-family: 'Roboto Regular';
    src: url({${RobotoRegularWoff2}}) format('woff2'),
         url(${RobotoRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'Roboto Thin';
    src: url(${RobotoThinWoff2}) format('woff2'),
         url(${RobotoThinWoff}) format('woff');
    font-weight: normal;
    font-style: normal;

}


@font-face {
    font-family: 'Roboto ThinItalic';
    src: url(${RobotoThinItalicWoff2}) format('woff2'),
         url(${RobotoThinItalicWoff}) format('woff');
    font-weight: normal;
    font-style: normal;

}




    *{
        font-family: 'Roboto Regular', sans-serif;
        margin: 0;
        padding: 0;
        box-sozing: border-box;
    }

    a{
        text-decoration: none;
    }

    h1{
        font-family: 'Roboto Black';
        letter-spacing: 1.1px;
    }

    h2{
        font-family: 'Roboto Bold'
    }

    h3,h4,h5{
        font-family: 'Roboto Medium'
    }

    body {
        margin: 0;
        padding: 0;
        background-color: ${COLORS.aliceBlue};
        overflow-x: hidden;
    }
`;

export default GlobalTheme

