import { IoPencil, IoTrash } from 'react-icons/io5';
import styled from 'styled-components';

export const Cards = styled.div`
    height: 330px;
    width: 250px;    
    padding: 10px;

    border-radius: 10px;
    border: 1px solid black;
    box-shadow: 18px 21px 48px -24px rgba(0,0,0,0.37);
`;
export const CardHeader = styled.div`
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const CardBody = styled.div`
    height: 75%;
    padding: 4px;
`;
export const CardFooter = styled.div`
    height: 15%;
   
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const PencilIcon = styled(IoPencil)`
    cursor: pointer;
    font-size: 20px;
    color: blue;
`

export const TrashIcon = styled(IoTrash)`
    cursor: pointer;
    font-size: 20px;
    color: red;
`