import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useRooms } from '../../../contexts/RoomsProvider';

const Room = () => {
    const { id } = useParams();
    const [room, setRoom] = useState();
    const { rooms } = useRooms()


    useEffect(() => {
        // const homeDataParsed = JSON.parse(homeData)
        const filtredData = rooms.find(data => data.id === id)
        console.log(rooms)
        if (filtredData !== null || undefined) {
            setRoom(filtredData)
        } else {
            setRoom(null)
        }
        // console.log(filtredData.roomName)
    }, [id]);

    useEffect(() => console.log(room), [room]);

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
