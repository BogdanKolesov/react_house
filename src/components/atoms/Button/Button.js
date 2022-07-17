import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ variant, onClick, children }) => {
    return (
        <StyledButton variant={variant} onClick={onClick}>
            {children}
        </StyledButton>
    );
}



export default Button;
