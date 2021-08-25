import { createGlobalStyle } from 'styled-components';



export const GlobalTheme = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Source Sans Pro', sans-serif;
    a{
        text-decoration: none;
        cursor: pointer;
    }
    li{
        list-style: none;
    }
    

    media: {
        phone: 'max-width: 479px';
        tablet: 'max-width: 767px';
        albumTablet: 'max-width: 991px';
        
    }

}
`
