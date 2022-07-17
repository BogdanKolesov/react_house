import React, { useState, useEffect } from 'react';
import { homeData } from '../../../data';
import { RoomPreview } from '../../molecules';
import { Clocks, Weather } from '../../organizmes'
import { HomeContainer, OutsideContainer, RoomsContainer } from './Home.styles';

const Home = () => {

    const [rooms, setRooms] = useState([]);

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
        </HomeContainer>
    );
}

export default Home;
