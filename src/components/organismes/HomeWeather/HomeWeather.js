import React from 'react';
import { HomeWeatherData } from '../../../data/HomeWeatherData';
import { Container, HomeWeatherTitle, HomeWeatherItems, HomeWeatherItem, HomeWeatherItemTitle, HomeWeatherItemValue } from './HomeWeather.elements';


const HomeWeather = () => {
    return (
        <Container>
            <HomeWeatherTitle>Погода в доме</HomeWeatherTitle>
            <HomeWeatherItems>
                {HomeWeatherData.map((item, index) => (
                    <HomeWeatherItem key={index}>
                        <HomeWeatherItemTitle >{item.title}</HomeWeatherItemTitle>
                        <HomeWeatherItemValue >{item.value}</HomeWeatherItemValue>
                    </HomeWeatherItem>

                ))}
            </HomeWeatherItems>
        </Container>
    );
};

export default HomeWeather;