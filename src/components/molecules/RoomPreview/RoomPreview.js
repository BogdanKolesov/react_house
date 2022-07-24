import React from 'react';
import { IconsContainer, RoomIcon, RoomInfo, RoomName, RoomPreviewContainer } from './RoomPreview.styles';
import { GiLightBulb, GiPhotoCamera } from 'react-icons/gi'


const RoomPreview = ({ onClick, roomData }) => {
    return (
        <>
            {
                roomData.roomName ? (
                    <RoomPreviewContainer to={`/rooms/${roomData.id}`} onClick={onClick}>
                        <RoomName>
                            {roomData.roomName !== null ? roomData.roomName : null}
                        </RoomName>
                        <RoomInfo status={roomData.status}>
                            STATUS: {roomData.status !== null ? roomData.status : null}
                        </RoomInfo>

                        {
                            roomData.roomName && roomData.lights.length !== 0 ? (
                                <IconsContainer>
                                    {
                                        (
                                            roomData.lights.map(item => {
                                                return (
                                                    <>
                                                        <RoomIcon status={item.status}>
                                                            <GiLightBulb />
                                                        </RoomIcon>
                                                    </>
                                                )
                                            })
                                        )
                                    }
                                </IconsContainer>
                            ) : null}
                        {
                            roomData.roomName && roomData.cameras.length !== 0 ? (
                                <IconsContainer>
                                    {
                                        (
                                            roomData.cameras.map(item => {
                                                return (
                                                    <>
                                                        <RoomIcon status={item.status}>
                                                            <GiPhotoCamera />
                                                        </RoomIcon>
                                                    </>
                                                )
                                            })
                                        )
                                    }
                                </IconsContainer>
                            ) : null}


                    </RoomPreviewContainer>
                ) : null
            }
        </>
    );
}

export default RoomPreview;
