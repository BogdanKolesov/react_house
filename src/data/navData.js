import { GiMushroomCloud, GiLighthouse, GiCctvCamera, GiSettingsKnobs } from 'react-icons/gi'
import { FaTemperatureHigh } from 'react-icons/fa'
import { COLORS } from '../constants/colors'


export const navData = [
    {
        text: 'Rooms',
        link: 'rooms',
        icon: (<GiMushroomCloud />),
        color: COLORS.darkYellow
    },
    {
        text: 'Lights',
        link: 'lights',
        icon: (<GiLighthouse />),
        color: COLORS.blue
    },
    {
        text: 'Cameras',
        link: 'cameras',
        icon: (<GiCctvCamera />),
        color: COLORS.darkGreenTransparent
    },
    {
        text: 'Weather data',
        link: 'weather',
        icon: (<FaTemperatureHigh />),
        color: COLORS.darkRedTransparent
    },
    {
        text: 'Settings',
        link: 'settings',
        icon: (<GiSettingsKnobs />),
        color: COLORS.gray
    },
]