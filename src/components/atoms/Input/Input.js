import React from 'react';
import { StyledInput } from './Input.styles';

const Input = ({ children, placeholder }) => {
    return (
        <StyledInput placeholder={placeholder} type='text' />
    );
}

export default Input;
