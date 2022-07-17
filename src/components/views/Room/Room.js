import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useRooms } from '../../../contexts/RoomsProvider';

const Room = () => {
    const { id } = useParams();
    const [room, setRoom] = useState();
    const { rooms, findRooms } = useRooms()

    useEffect(() => {
        findRooms()
        console.log('ROOMS:', rooms)
    }, [id]);

    useEffect(() => {
        const filtredData = rooms.find(data => data.id == id)
        console.log(filtredData);
        if (filtredData) {
            setRoom(filtredData)
        }
    }, []);

    useEffect(() => { }, [room]);

    if (room) {
        return (
            <div>
                {room.id}
                {room.roomName}
                {room.status ? room.status : null}
                {
                    room.lights ? room.lights.map((data) => {
                        return (
                            <div key={data.id}>
                                LIGHT: {data.id}, STATUS: {data.status}
                            </div>
                        )
                    }) : null
                }
                {
                    room.cameras ? room.cameras.map((data) => {
                        return (
                            <div key={data.id}>
                                CAMERA: {data.id}, STATUS: {data.status}
                            </div>
                        )
                    }) : null
                }
            </div>
        )
    } else {
        return (
            <div>
                ERROR
            </div>
        )
    }
}

export default Room;
