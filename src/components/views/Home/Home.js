import React, { useState, useEffect, useRef } from 'react';
import { useRooms } from '../../../contexts/RoomsProvider';
import { homeData } from '../../../data';
import { Button } from '../../atoms';
import { RoomPreview } from '../../molecules';
import { AddRoomModal, Clocks, Weather } from '../../organizmes'
import { HomeContainer, OutsideContainer, RoomsContainer } from './Home.styles';

const Home = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const { rooms, setRooms, findRooms } = useRooms()
    const [newRoomName, setNewRoomName] = useState();
    const [newRoom, setNewRoom] = useState({
        id: 'test',
        roomName: 'test',
    });

    const updatedRoomRef = useRef()
    const addRoom = async (roomName, date) => {

        updatedRoomRef.current = await {
            roomName,
            id: date
        }
        if (roomName !== null) {
            await setNewRoom((prev) => updatedRoomRef.current)
            await setRooms((prev) => [...prev, newRoom])
            console.log('FUNK', newRoom)
            localStorage.setItem('rooms', JSON.stringify(rooms))
        }
    }

    useEffect(() => {
        findRooms()

    }, []);


    return (
        <HomeContainer>
            <OutsideContainer>
                <Weather />
                <Clocks />
                <Button onClick={() => setModalVisible(true)}>Add room</Button>
            </OutsideContainer>
            <RoomsContainer>

                {
                    rooms.map((data, index) => {
                        return (
                            <RoomPreview key={index} roomData={data} />
                        )
                    })
                }
            </RoomsContainer>
            <AddRoomModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                addRoom={addRoom}
                newRoom={newRoom}
                newRoomName={newRoomName}
                setNewRoomName={setNewRoomName}
            />
        </HomeContainer>
    );
}

export default Home;
