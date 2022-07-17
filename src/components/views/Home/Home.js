import React, { useState, useEffect } from 'react';
import { homeData } from '../../../data';
import { Button } from '../../atoms';
import { RoomPreview } from '../../molecules';
import { AddRoomModal, Clocks, Weather } from '../../organizmes'
import { HomeContainer, OutsideContainer, RoomsContainer } from './Home.styles';

const Home = () => {

    const [rooms, setRooms] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(data => setPosts(data))
    // }, []);

    return (
        <HomeContainer>
            <OutsideContainer>
                <Weather />
                <Clocks />
                <Button onClick={() => setModalVisible(true)}>Add room</Button>
            </OutsideContainer>
            <RoomsContainer>
                {
                    JSON.parse(homeData).map((data, index) => {
                        return (
                            <RoomPreview key={index} roomData={data} />
                        )
                    })
                }
            </RoomsContainer>
            <AddRoomModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </HomeContainer>
    );
}

export default Home;
