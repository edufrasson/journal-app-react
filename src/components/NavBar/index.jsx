import { Link } from "react-router-dom";
import {NavBarContainer, ImageContainer, LinkContainer, TextContainer, LogoIcon} from "./styles.js";



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
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </TextContainer>
            </LinkContainer>
        </NavBarContainer>
    )
}