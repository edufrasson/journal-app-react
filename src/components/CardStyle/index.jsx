import React from 'react';
import {CardHeader, CardBody, CardFooter, Cards, PencilIcon, TrashIcon } from './styles';


export function CardStyle(id, title, content) {
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
                <PencilIcon />
                <TrashIcon />
            </CardFooter>
        </Cards>       
    )
}