import React from 'react';
import { homeData } from '../../../data';
import { RoomPreview } from '../../molecules';
import { HomeContainer, RoomsContainer } from './Home.styles';

const Home = () => {
    return (
        <HomeContainer>
            <RoomsContainer>
                {
                    homeData.map((data) => {
                        return (
                            <RoomPreview roomData={data} />
                        )
                    })
                }
            </RoomsContainer>
        </HomeContainer>
    );
}

export default Home;
