export const DarkBlueTheme = {
    background: require('../../assets/images/themes/DarkBlueTheme/background.jpg').default,
    colors: {
        primary: 'rgba(48, 63, 159, 0.5);',
        darkPrimary: '#303F9F',
        lightPrimary: 'rgba(197, 202, 233, 0.5);',
        accent: 'rgba(76, 175, 80, 0.5);',
        text: '#FFFFFF',
        primaryText: '#212121',
        secondaryText: '#757575',
        divider: '#BDBDBD',
        // range: `rgba(63, 81, 181, ${range});` //TODO! link
    },
    media: {
        phone: 'max-width: 479px',
        tablet: 'max-width: 767px',
        albumTablet: 'max-width: 991px',
    },

    sizes: {
        fonts: {
            big: '30px',
            medium: '20px',
            small: '15px'
        },

        blocks: {
            big: '40%',
            medium: '25%',
            small: '18%'
        }
    }
}