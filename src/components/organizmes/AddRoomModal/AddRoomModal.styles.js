import styled from 'styled-components';

export const AddRoomModalContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: ${props => props.modalVisible ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    background-color: rgba(105,105,105,0.5);
    z-index: 2;
`

export const AddRoomModalContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 600px;
    height: 300px;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
`
export const CloseIcon = styled.div`
    width: 30px;
    height: 30px;
    color: black;
    cursor: pointer;
    font-size: 20px;
    position: absolute;
    right: 10px;
    top: 10px;
`