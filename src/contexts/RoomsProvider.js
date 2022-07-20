import React, { createContext, useState, useEffect, useContext } from 'react';
import { homeData } from '../data';

const RoomsContext = createContext()


const RoomsProvider = ({ children }) => {
    const [rooms, setRooms] = useState([]);

    const findRooms = async () => {
        // const homeDataParsed = JSON.parse(homeData)
        // console.log('PARSED', homeDataParsed)
        const result = await JSON.parse(localStorage.getItem('rooms'));
        if (result) setRooms(result)
        console.log('ROOMS FROM FIND ROOMS:', rooms)
        console.log(rooms)
    }

    useEffect(() => {
        findRooms()
    }, []);


    return (
        <RoomsContext.Provider value={{ rooms, setRooms, findRooms }}>
            {children}
        </RoomsContext.Provider>
    );
}
export const useRooms = () => useContext(RoomsContext)


export default RoomsProvider;
