import React from 'react';
import { homeData } from '../../../data';
import { RoomPreview } from '../../molecules';
import { Clocks, Weather } from '../../organizmes'
import { HomeContainer, OutsideContainer, RoomsContainer } from './Home.styles';

const Home = () => {
    return (
        <HomeContainer>
            <OutsideContainer>
                <Weather />
                <Clocks />
            </OutsideContainer>
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
