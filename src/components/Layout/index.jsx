import { NavBar } from "../NavBar"
import { Content } from "../Content"
import {BodyContainer} from "./styles"


export function Layout() {
    return (
        <BodyContainer>
            <NavBar/>           
            <Content/>
        </BodyContainer>
    )
}