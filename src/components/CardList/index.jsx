import React, { useEffect, useState } from 'react';
import { CardContainer} from './styles';
import { CardStyle } from '../CardStyle';
import { API } from '../../services/api';


export function CardList() { 
    const [card, setCard] = useState([])

    useEffect(() =>{
        API.get('noticia').then((response) =>{
            setCard(response.data.response_data)
        })
    }, [])

    return(
        <CardContainer>        
            {card.map((card) => (
                <CardStyle
                    key={card.id}
                    id={card.id}
                    title={card.titulo}
                    content={card.conteudo}                
                />
            ))}          
        </CardContainer>
    )
}