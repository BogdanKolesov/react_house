import React from 'react';
import { NavContainer, NavContent, NavContentItem, NavIcon, NavText } from './Nav.styles';

const Nav = ({ data }) => {
    return (
        <NavContainer>
            {
                data.map((item, index) => {
                    return (
                        <NavContent key={index}>
                            <NavContentItem color={item.color}>
                                <NavIcon>
                                    {item.icon}
                                </NavIcon>
                                <NavText>
                                    {item.text}
                                </NavText>
                            </NavContentItem>
                        </NavContent>
                    )
                })
            }
        </NavContainer>
    );
}

export default Nav;
