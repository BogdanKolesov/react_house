import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useRooms } from '../../../contexts/RoomsProvider';
import { Button } from '../../atoms';
import { EditRoomModal } from '../../organizmes';

const Room = () => {
    const { id } = useParams();
    const [room, setRoom] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const { rooms, findRooms } = useRooms()

    useEffect(() => {
        findRooms()
        console.log('ROOMS:', rooms)
    }, [id]);



    useEffect(() => {
        let filtredData = rooms.find(data => data.id == id)
        console.log(filtredData);
        if (filtredData) {
            setRoom(() => filtredData)
        }
    }, []);

    useEffect(() => {
        // console.log(room);
    }, [room]);

    if (room) {
        return (
            <div>
                ID: {room.id}
                RoomName: {room.roomName}

                Status: {room.status ? room.status : null}
                {
                    room.lights ? room.lights.map((data) => {
                        return (
                            <div key={data.id}>
                                LIGHT: {data.name}, STATUS: {data.status}
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
                <EditRoomModal data={room} modalVisible={modalVisible} setModalVisible={setModalVisible} />
                <Button onClick={() => setModalVisible(true)}>Edit room</Button>
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
