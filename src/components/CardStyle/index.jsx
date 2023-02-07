import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import {CardContext} from '../../context/CardContext'
import {CardHeader, CardBody, CardFooter, Cards, PencilIcon, TrashIcon } from './styles';


export function CardStyle({id, title, content, category_id}) {
    const {handleEdit, handleDelete} = useContext(CardContext);
   
    return (
        <Cards key={id}>
            <CardHeader>
                <h5>{title}</h5>
            </CardHeader>
            <hr />
            <CardBody>
                <h5>{content}</h5>
            </CardBody>
            <hr />
            <CardFooter>
                <Link to={'/add'}>
                    <PencilIcon onClick={() => handleEdit(id, title, content, category_id)}/>
                </Link>                
                <TrashIcon onClick={() => handleDelete(id)}/>
            </CardFooter>
        </Cards>       
    )
}