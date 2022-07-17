import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { homeData } from '../../../data';

const Room = () => {
    const { id } = useParams();
    const [room, setRoom] = useState();

    useEffect(() => {
        const homeDataParsed = JSON.parse(homeData)
        const filtredData = homeDataParsed.find(data => data.id === id)
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
                {room.status}
                {
                    room.lights.map((data) => {
                        return (
                            <div key={data.id}>
                                LIGHT: {data.id}, STATUS: {data.status}
                            </div>
                        )
                    })
                }
                {
                    room.cameras.map((data) => {
                        return (
                            <div key={data.id}>
                                CAMERA: {data.id}, STATUS: {data.status}
                            </div>
                        )
                    })
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
