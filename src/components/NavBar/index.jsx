import {React} from 'react';
import {NavBarContainer, ImageContainer, LinkContainer, TextContainer, LogoIcon, LinkStyle} from "./styles.js";



export function NavBar() {
    return (
        <NavBarContainer>
            <ImageContainer>
                <LogoIcon/>
                <h3>Journal App</h3>
            </ImageContainer>
            <LinkContainer>
                <TextContainer>
                    <ul>
                        <li>
                            <LinkStyle to="/"><strong>Home</strong></LinkStyle>
                            <LinkStyle to="/add"><strong>Add</strong> </LinkStyle>                           
                        </li>
                    </ul>
                </TextContainer>
            </LinkContainer>
        </NavBarContainer>
    )
}