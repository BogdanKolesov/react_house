import React from 'react';
import { RoomInfo, RoomName, RoomPreviewContainer } from './RoomPreview.styles';

const RoomPreview = ({ onClick, roomData }) => {
    return (
        <RoomPreviewContainer to={`/rooms/${roomData.id}`} onClick={onClick}>
            <RoomName>
                {roomData.roomName}
            </RoomName>
            <RoomInfo>
                STATUS: {roomData.status}
            </RoomInfo>
        </RoomPreviewContainer>
    );
}

export default RoomPreview;
