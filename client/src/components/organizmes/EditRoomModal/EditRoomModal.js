import React, { useEffect, useState } from 'react'
import { CloseIcon, EditRoomModalContainer, EditRoomModalContent } from './EditRoomModal.styles'
import { GrClose } from 'react-icons/gr'
import { Button, Input } from '../../atoms'
import { useRooms } from '../../../contexts/RoomsProvider'

export default function EditRoomModal({ data, modalVisible, setModalVisible }) {
    const { rooms, setRooms } = useRooms()
    const [filtredData, setFiltredData] = useState(rooms.find(item => item.id == data.id) || null);
    const [lights, setLights] = useState(data.lights);


    const handleCloseModal = () => {
        setModalVisible(false)
    }


    const addLight = () => {
        const result = rooms.filter(item => item.id !== data.id)
        const newData = {
            ...data,
            lights: [
                {
                    id: Date.now() + 1,
                    name: 'FIRST CAMERA',
                    resource: '#',
                    value: 15,
                    status: 'online',
                },
            ]
        }
        setRooms([...result, newData])
    }

    const addCamera = () => {
        const result = rooms.filter(item => item.id !== data.id)
        const newData = {
            ...data,
            cameras: [
                {
                    id: Date.now() + 1,
                    name: 'FIRST CAMERA',
                    resource: '#',
                    value: 15,
                    status: 'online',
                },
            ]
        }
        setRooms([...result, newData])
    }




    useEffect(() => {
        localStorage.setItem('rooms', JSON.stringify(rooms));
    }, [rooms]);

    return (
        <EditRoomModalContainer modalVisible={modalVisible}>
            <EditRoomModalContent>
                <CloseIcon onClick={handleCloseModal}>
                    <GrClose />
                </CloseIcon>
                <h2>Edit room</h2>
                <Input placeholder={data.roomName} />
                <Input placeholder={data.id} />
                <Button onClick={() => addLight()}>Add light</Button>
                <Button onClick={() => addCamera()}>Add camera</Button>

            </EditRoomModalContent>
        </EditRoomModalContainer>
    )
}
