import { NavBar } from "../NavBar"
import { Content } from "../Content"


export function Layout() {
    return (
        <BodyContainer>
            <NavBar/>           
            <Content/>
        </BodyContainer>
    )
}