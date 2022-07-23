import React, { useState, useEffect, useRef } from 'react';
import { useRooms } from '../../../contexts/RoomsProvider';
import { homeData } from '../../../data';
import { Button } from '../../atoms';
import { RoomPreview } from '../../molecules';
import { AddRoomModal, Clocks, Weather } from '../../organizmes'
import { HomeContainer, OutsideContainer, RoomsContainer } from './Home.styles';

const Home = () => {

    ///////////

    const [modalVisible, setModalVisible] = useState(false);
    const { rooms, setRooms, findRooms } = useRooms()
    const [newRoomName, setNewRoomName] = useState();
    const [roomInputName, setRoomInputName] = useState();
    const [newRoom, setNewRoom] = useState();

    const updatedRoomRef = useRef()
    const addRoom = async (roomName, date) => {
        if (updatedRoomRef.current !== null) {
            updatedRoomRef.current = await {
                roomName,
                id: date
            }
        } else {
            return null
        }
    }

    const updateRooms = () => {
        setRooms([...rooms, updatedRoomRef.current])
        console.log('ROOMS:', rooms);
    }

    useEffect(() => {
        if (newRoomName !== null) {
            addRoom(newRoomName, Date.now())
        }
        console.log(newRoomName)
        // findRooms()
    }, [newRoomName]);

    // useEffect(() => {
    //     setNewRoom(() => updatedRoomRef.current)
    // }, [updatedRoomRef.current]);

    useEffect(() => {
        updateRooms()
    }, [updatedRoomRef.current]);

    useEffect(() => {
        localStorage.setItem('rooms', JSON.stringify(rooms))
    }, [rooms]);

    useEffect(() => {
        // findRooms()
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
                    rooms || rooms.length !== 0 ? rooms.map((data) => {
                        return (
                            <RoomPreview key={data.id} roomData={data} />
                        )
                    }) : 'No rooms'
                }
            </RoomsContainer>
            <AddRoomModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                addRoom={addRoom}
                newRoom={newRoom}
                newRoomName={newRoomName}
                setNewRoomName={setNewRoomName}
                roomInputName={roomInputName}
                setRoomInputName={setRoomInputName}

            />
        </HomeContainer>
    );
}

export default Home;
