import React, { useRef, createContext, useState, useEffect, useContext } from 'react';
import { homeData } from '../data';

const RoomsContext = createContext()


const RoomsProvider = ({ children }) => {
    const roomsRef = useRef()
    const [rooms, setRooms] = useState([]);

    const findRooms = async () => {
        const result = await JSON.parse(localStorage.getItem('rooms'));
        if (result) { setRooms(result) }
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
