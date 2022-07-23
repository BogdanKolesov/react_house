import React from 'react';
import { RoomInfo, RoomName, RoomPreviewContainer } from './RoomPreview.styles';

const RoomPreview = ({ onClick, roomData }) => {
    return (
        <>
            {
                roomData.roomName ? (
                    <RoomPreviewContainer to={`/rooms/${roomData.id}`} onClick={onClick}>
                        <RoomName>
                            {roomData.roomName !== null ? roomData.roomName : null}
                        </RoomName>
                        <RoomInfo>
                            STATUS: {roomData.status !== null ? roomData.status : null}
                        </RoomInfo>
                    </RoomPreviewContainer>
                ) : null
            }
        </>
    );
}

export default RoomPreview;
