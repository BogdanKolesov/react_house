import React, { useState, useEffect, useRef } from 'react';
import { getWeatherData } from '../../../api/weatherApi';
import { useRooms } from '../../../contexts/RoomsProvider';
import { homeData, navData } from '../../../data';
import { Button } from '../../atoms';
import { RoomPreview } from '../../molecules';
import { AddRoomModal, Clocks, Nav, Weather } from '../../organizmes'
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

        updatedRoomRef.current = await {
            roomName,
            id: date,
            lights: [

            ],
            cameras: [

            ]
        }

    }

    const updateRooms = () => {
        if (updatedRoomRef.current) {
            setRooms([...rooms, updatedRoomRef.current].filter(item => item.roomName !== undefined || null || ''))
            console.log('ROOMS:', rooms);
        }
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
        getWeatherData()
        findRooms()
    }, []);



    return (
        <HomeContainer>
            <OutsideContainer>
                <Weather />
                <Clocks />
                <Button onClick={() => setModalVisible(true)}>Add room</Button>
                <Button onClick={() => setRooms([])}>Cleat storage (TEST)</Button>
                <Button onClick={() => getWeatherData()}>GetWeather</Button>
            </OutsideContainer>
            <Nav data={navData} />
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
