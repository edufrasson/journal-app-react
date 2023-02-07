import React from 'react';

import {NavBarContainer, ImageContainer, ActionContainer, TextContainer, LogoIcon, LinkStyle} from "./styles.js";



export function NavBar() {
    

    return (
        <NavBarContainer>
            <ImageContainer>
                <LogoIcon/>
                <h3>Journal App</h3>
            </ImageContainer>
            <ActionContainer>              
                <TextContainer>
                    <ul>
                        <li>
                            <LinkStyle to="/"><strong>Home</strong></LinkStyle>
                            <LinkStyle to="/add"><strong>Add</strong> </LinkStyle>                           
                        </li>
                    </ul>
                </TextContainer>
            </ActionContainer>
        </NavBarContainer>
    )
}