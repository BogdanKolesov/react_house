import React from 'react';
import { Outlet } from 'react-router-dom';
import { navData } from '../../../data';
import { Nav } from '../../organizmes'
import { ContentContainer, HomeContainer } from './Home.styles';

const Home = () => {





    return (
        <HomeContainer>
            <ContentContainer>
                <Nav data={navData} />
                <Outlet />
            </ContentContainer>
        </HomeContainer>
    );
}

export default Home;
