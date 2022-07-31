import React, { useEffect } from 'react';
import { useRooms } from '../../../contexts/RoomsProvider';
import { RoomPreview } from '../../molecules'
import { RoomPageContainer } from './RoomsPage.styles';


const RoomsPage = () => {

    const { rooms, setRooms, findRooms } = useRooms()
    useEffect(() => {
        findRooms()
    }, []);


    return (
        <RoomPageContainer>
            {
                rooms.map((room) => {
                    return (
                        <div key={room.id}>
                            <RoomPreview roomData={room} />
                        </div>
                    )
                })
            }
        </RoomPageContainer>
    );
}

export default RoomsPage;
