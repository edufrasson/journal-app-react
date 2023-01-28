import { Link } from "react-router-dom";
import {NavBarContainer} from "./styles.js"

export function NavBar() {
    return (
        <NavBarContainer>
            <ImageContainer>
                <img src="#" alt="logo" />
            </ImageContainer>
            <LinksContainer>
                <TextContainer>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </TextContainer>
            </LinksContainer>
        </NavBarContainer>
    )
}