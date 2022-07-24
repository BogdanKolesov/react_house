import { GiMushroomCloud, GiLighthouse, GiCctvCamera, GiSettingsKnobs } from 'react-icons/gi'
import { FaTemperatureHigh } from 'react-icons/fa'


export const navData = [
    {
        text: 'Rooms',
        link: '#',
        icon: (<GiMushroomCloud />)
    },
    {
        text: 'Lights',
        link: '#',
        icon: (<GiLighthouse />)
    },
    {
        text: 'Cameras',
        link: '#',
        icon: (<GiCctvCamera />)
    },
    {
        text: 'Weather History',
        link: '#',
        icon: (<FaTemperatureHigh />)
    },
    {
        text: 'Settings',
        link: '#',
        icon: (<GiSettingsKnobs />)
    },
]