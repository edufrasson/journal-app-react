import React, { createContext, useState } from "react";
import { useAxios } from "../hooks/useAxios";
import {useNavigate} from 'react-router-dom';
import { API } from "../services/api";

export const CardContext = createContext();

export function CardContextProvider({ children }) {
    let history = useNavigate();

    const { data, mutate } = useAxios('noticia');

    const [title, setTitle] = useState([])
    const [id, setId] = useState(null)
    const [content, setContent] = useState([])
    const [category, setCategory] = useState([])

    function resetStates() {
        setTitle([])
        setId([])
        setContent([])
        setCategory([])
    }

    function titleHandler(event) {
        setTitle(event.target.value)
    }
    function idHandler(event) {
        setId(event.target.value)
    }
    function contentHandler(event) {
        setContent(event.target.value)
    }
    function categoryHandler(event) {
        setCategory(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        const card = {
            id, title, content, category
        }

        if (id) {
            API.put('noticia/save', card)

            const updatedCards = {
                response_data: data?.response_data?.map((video => {
                    /* 
                        Percorre toda a lista de noticia, quando achar a noticia editada,
                        ele retorna os novos valores pro registro.
                    */
                    if (video.id === id) {
                        return [title, content, category]
                    }

                    return video;
                }))
            }

            mutate(updatedCards, false);
            resetStates();
            history('')
        } else {
            console.log('caiu no if certo')
            API.post('noticia/save', card)
            /* 
                Retorna todos os valores da lista de noticias e adiciona o objeto 'card',
                anteriormente criado.
            */
            const updatedCards = {
                response_data: [...data?.response_data, card]
            }
            mutate(updatedCards, false);
            resetStates();
            history('')
        }
    }


    function getAndSetCategory(category_id) {
        API.get(`categoria/get-by-id?id=${category_id}`).then((response) => {
            setCategory(response.data.response_data.nome)
        })
    }

    function handleEdit(id, title, content, category_id) {
        setTitle(title)
        setContent(content)
        setId(id)
        getAndSetCategory(category_id);
    }

    function handleDelete(id) {
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
            handleSubmit, handleEdit, handleDelete, getAndSetCategory, resetStates
            
        }}
    >
        {children}
    </CardContext.Provider>

}