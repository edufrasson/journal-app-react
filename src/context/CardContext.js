import React, {createContext, useState} from "react";
import { useAxios } from "../hooks/useAxios";
import { API } from "../services/api";

export const CardContext = createContext();

export function CardContextProvider({children}){
    const {data, mutate} = useAxios('noticia');

    const [title, setTitle] = useState([])
    const [id, setId] = useState(null)
    const [content, setContent] = useState([])
    const [category, setCategory] = useState([])

    function titleHandler(event){
        setTitle(event.target.value)
    }
    function idHandler(event){
        setId(event.target.value)
    }
    function contentHandler(event){
        setContent(event.target.value)
    }
    function categoryHandler(event){
        setCategory(event.target.value)
    }

    function handleSubmit(){     
        const card = {
            id, title, content, category
        }

        API.post('noticia/save', card)
    }

    function getCategory(category_id){    
        API.get(`categoria/get-by-id?id=${category_id}`).then((response) => {
            setCategory(response.data.response_data.nome)
        })
    }

    function handleEdit(id, title, content){
        setTitle(title)
        setContent(content)
        setId(id)
    }
    function handleDelete(id){
        API.delete(`noticia/delete?id=${id}`)

        /*
            Adiciona apenas os cards que não tem o mesmo id do que o informado pra ser deletado no objeto,
            fazendo com que ele não apareça mais na tela até ser revalidado.

            Depois, esse objeto é mutado com o SWR, atulizando a variável data.
        */
        const updatedCards = {
            response_data: data.response_data?.filter((card) => card.id !== id)
        }

        mutate(updatedCards, false);
    }

    return <CardContext.Provider
            value={{
                title, content, category, id,
                titleHandler, contentHandler, categoryHandler, idHandler,
                handleSubmit, handleEdit, handleDelete, getCategory
            }}
        >
            {children}
        </CardContext.Provider>
    
}