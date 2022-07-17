import React, { useState, useEffect } from 'react';
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

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(data => setPosts(data))
    // }, []);

    const addRoom = async (roomName, date) => {
        if (roomName !== null) {
            console.log(roomName)
            await setNewRoom((prev) => (
                {
                    id: date,
                    roomName: roomName
                }
            ))
            console.log(newRoom)
            setRooms((prev) => [...rooms, newRoom])

            localStorage.setItem('rooms', JSON.stringify(rooms))
        }
    }



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
