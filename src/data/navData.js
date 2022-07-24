import { GiMushroomCloud, GiLighthouse, GiCctvCamera, GiSettingsKnobs } from 'react-icons/gi'
import { FaTemperatureHigh } from 'react-icons/fa'
import { COLORS } from '../constants/colors'


export const navData = [
    {
        text: 'Rooms',
        link: '#',
        icon: (<GiMushroomCloud />),
        color: COLORS.darkYellow
    },
    {
        text: 'Lights',
        link: '#',
        icon: (<GiLighthouse />),
        color: COLORS.blue
    },
    {
        text: 'Cameras',
        link: '#',
        icon: (<GiCctvCamera />),
        color: COLORS.darkGreenTransparent
    },
    {
        text: 'Weather data',
        link: '#',
        icon: (<FaTemperatureHigh />),
        color: COLORS.darkRedTransparent
    },
    {
        text: 'Settings',
        link: '#',
        icon: (<GiSettingsKnobs />),
        color: COLORS.gray
    },
]