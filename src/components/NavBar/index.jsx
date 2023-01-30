
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
                            <LinkStyle to="/">Home</LinkStyle>
                            <LinkStyle to="/add">Add </LinkStyle>                           
                        </li>
                    </ul>
                </TextContainer>
            </LinkContainer>
        </NavBarContainer>
    )
}