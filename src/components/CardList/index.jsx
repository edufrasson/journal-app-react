import React, { useEffect, useState } from 'react';
import { CardContainer} from './styles';
import { CardStyle } from '../CardStyle';
import { API } from '../../services/api';


export function CardList() { 
   
    useEffect(() =>{
        API.get('noticia').then((response) =>{
            console.log(response)
        })
    }, [])
    
    return(

        <CardContainer>        

        </CardContainer>
    )
}