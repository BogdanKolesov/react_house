import React, { useState, useEffect } from 'react';
import { Button, Input } from '../../atoms';
import { AddRoomModalContainer, AddRoomModalContent, CloseIcon } from './AddRoomModal.styles';
import { GrClose } from 'react-icons/gr'

const AddRoomModal = ({ modalVisible, setModalVisible, newRoomName, setNewRoomName, addRoom }) => {


    const setRoom = async () => {
        await addRoom(newRoomName, Date.now())
        await setNewRoomName('')
    }

    const handleCloseModal = () => {
        setModalVisible(false)
        setNewRoomName('')
    }

    useEffect(() => {

    }, [newRoomName]);


    return (
        <AddRoomModalContainer modalVisible={modalVisible}>
            <AddRoomModalContent>
                <h2>Add Room</h2>
                <Input
                    value={newRoomName}
                    onChange={(event) => setNewRoomName((prev) => event.target.value)}
                    placeholder='Room name' />
                <Button
                    onClick={setRoom}
                >Add room to rooms</Button>
                <CloseIcon onClick={handleCloseModal}>
                    <GrClose />
                </CloseIcon>
            </AddRoomModalContent>
        </AddRoomModalContainer>
    );
}

export default AddRoomModal;
