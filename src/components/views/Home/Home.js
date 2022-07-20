import React, { useState, useEffect, useRef } from 'react';
import { useRooms } from '../../../contexts/RoomsProvider';
import { homeData } from '../../../data';
import { Button } from '../../atoms';
import { RoomPreview } from '../../molecules';
import { AddRoomModal, Clocks, Weather } from '../../organizmes'
import { HomeContainer, OutsideContainer, RoomsContainer } from './Home.styles';

const Home = () => {
    const { execute, status, value, error } = useAsync(myFunction, false);

    return (
        <div>
            {status === "idle" && <div>Start your journey by clicking a button</div>}
            {status === "success" && <div>{value}</div>}
            {status === "error" && <div>{error}</div>}
            <button onClick={execute} disabled={status === "pending"}>
                {status !== "pending" ? "Click me" : "Loading..."}
            </button>
        </div>
    );
}

// An async function for testing our hook.
// Will be successful 50% of the time.
const myFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rnd = Math.random() * 10;
            rnd <= 5
                ? resolve("Submitted successfully 🙌")
                : reject("Oh no there was an error 😞");
        }, 2000);
    });
};
///////////

const [modalVisible, setModalVisible] = useState(false);
const { rooms, setRooms, findRooms } = useRooms()
// const [rooms, setRooms] = useState([]);
const [newRoomName, setNewRoomName] = useState();
const [roomInputName, setRoomInputName] = useState();
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
        await setNewRoom(updatedRoomRef.current)
        console.log('NEW ROOM:', newRoom)
        console.log('0:', rooms)
    }
}

const updateRooms = () => {
    setRooms((prev) => [...prev, newRoom])
    localStorage.setItem('rooms', JSON.stringify(rooms))
}

useEffect(() => {
    addRoom(newRoomName, Date.now())
    console.log(newRoomName)
    // findRooms()
}, [newRoomName]);

useEffect(() => {
    updateRooms()
}, [newRoom]);

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
            roomInputName={roomInputName}
            setRoomInputName={setRoomInputName}

        />
    </HomeContainer>
);
}

export default Home;
