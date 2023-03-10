import React from 'react';

import { CardStyle } from '../CardStyle';
import { useAxios } from '../../hooks/useAxios';

import { CardContainer } from './styles';

export function CardList() {
    /*const [card, setCard] = useState([])

    useEffect(() =>{
        API.get('noticia').then((response) =>{
            setCard(response.data.response_data)
        })
    }, [])*/

    const { data } = useAxios('noticia');   

    return (
        <CardContainer>
            {data?.response_data?.map((card) => (
                <CardStyle
                    key={card.id}
                    id={card.id}
                    title={card.titulo}
                    content={card.conteudo}
                    category_id={card.id_categoria}
                />
            ))}
        </CardContainer>
    )
}