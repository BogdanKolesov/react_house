import React from 'react';
import { Button, Input } from '../../atoms';
import { AddRoomModalContainer, AddRoomModalContent, CloseIcon } from './AddRoomModal.styles';
import { GrClose } from 'react-icons/gr'

const AddRoomModal = ({ modalVisible, setModalVisible }) => {

    return (
        <AddRoomModalContainer modalVisible={modalVisible}>
            <AddRoomModalContent>
                <h2>Add Room</h2>
                <Input placeholder='Room name' />
                <Button>Add Room</Button>
                <CloseIcon onClick={() => setModalVisible(false)}>
                    <GrClose />
                </CloseIcon>
            </AddRoomModalContent>
        </AddRoomModalContainer>
    );
}

export default AddRoomModal;
