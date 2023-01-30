import { Routes, Route } from "react-router-dom"
import { CardList } from "./components/CardList"
import { AddCard } from "./components/AddCard"

export function MapRoutted(){
    return(
        <Routes>
            <Route path="/" element={<CardList/>}/>
            <Route path="/home" element={<CardList/>}/>
            <Route path="/add" element={<AddCard/>}/>           
        </Routes>
    )
}