import { NavBar } from "../NavBar"
import { Content } from "../Content"
import { Footer } from "../Footer"
import {BodyContainer} from "./styles"


export function Layout() {
    return (
        <BodyContainer>
            <NavBar/>           
            <Content/>
            <Footer/>
        </BodyContainer>
    )
}