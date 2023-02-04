import React, {createContext, useState} from "react";
import { API } from "../services/api";

export const CardContext = createContext();

export function CardContextProvider({children}){
    const [title, setTitle] = useState([])
    const [content, setContent] = useState([])
    const [category, setCategory] = useState([])

    function titleHandler(event){
        setTitle(event.target.value)
    }
    function contentHandler(event){
        setContent(event.target.value)
    }
    function categoryHandler(event){
        setCategory(event.target.value)
    }

    function handleSubmit(){
        const card = {
            title, content, category
        }

        API.post('noticia/save', card)
    }

    return <CardContext.Provider
            value={{
                title, content, category,
                titleHandler, contentHandler, categoryHandler,
                handleSubmit
            }}
        >
            {children}
        </CardContext.Provider>
    
}