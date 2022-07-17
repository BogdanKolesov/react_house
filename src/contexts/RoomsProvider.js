import React, { createContext, useState, useEffect, useContext } from 'react';
import { homeData } from '../data';

const RoomsContext = createContext()

const RoomsProvider = ({ children }) => {
    const [rooms, setRooms] = useState([]);

    const findRooms = async () => {
        const result = await localStorage.getItem('rooms', JSON.stringify(rooms))
        if (result !== null) setRooms(JSON.parse(result))
        console.log(rooms);
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
