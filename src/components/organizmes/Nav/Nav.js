import React from 'react';
import { NavContainer, NavContent, NavContentItem, NavIcon, NavText } from './Nav.styles';

const Nav = ({ data }) => {
    return (
        <>
            {
                data.map((item) => {
                    return (
                        <NavContainer>
                            <NavContent>
                                <NavContentItem>
                                    <NavIcon>
                                        {item.icon}
                                    </NavIcon>
                                    <NavText>
                                        {item.text}
                                    </NavText>
                                </NavContentItem>
                            </NavContent>
                        </NavContainer>
                    )
                })
            }
        </>
    );
}

export default Nav;
