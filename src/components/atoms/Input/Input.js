import React from 'react';
import { StyledInput } from './Input.styles';

const Input = ({ children, placeholder, value, onChange }) => {
    return (
        <StyledInput onChange={onChange} value={value} placeholder={placeholder} type='text' />
    );
}

export default Input;
