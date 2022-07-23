import React, { createContext, useState, useEffect, useContext } from 'react';
import { homeData } from '../data';

const RoomsContext = createContext()


const RoomsProvider = ({ children }) => {
    const [rooms, setRooms] = useState(JSON.parse(localStorage.getItem('rooms')) || []);

    const findRooms = async () => {
        // const homeDataParsed = JSON.parse(homeData)
        // console.log('PARSED', homeDataParsed)
        const result = await JSON.parse(localStorage.getItem('rooms'));
        if (result) setRooms(result)
        console.log('ROOMS FROM FIND ROOMS:', rooms)
        console.log(rooms)
    }

    useEffect(() => {
        const rooms = JSON.parse(localStorage.getItem('rooms'));
        if (rooms) {
            setRooms(rooms);
        }

    }, []);

    // useEffect(() => {
    //     findRooms()
    //     console.log('ROOMS FROM RP:', rooms)
    // }, []);


    return (
        <RoomsContext.Provider value={{ rooms, setRooms, findRooms }}>
            {children}
        </RoomsContext.Provider>
    );
}
export const useRooms = () => useContext(RoomsContext)


export default RoomsProvider;

