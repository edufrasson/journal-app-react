import styled from 'styled-components';

export const CardContainer = styled.div`
    height: 100%;
    width: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    flex-wrap: wrap;
`;
export const Cards = styled.div`
    height: 230px;
    width: 150px;
    border: 1px solid black;
    border-radius: 10px;

    box-shadow: 18px 21px 48px -24px rgba(0,0,0,0.37);
`;
export const CardHeader = styled.div`
    height: 20%;
    border: 1px solid black;
`;
export const CardBody = styled.div`
    height: 65%;
    border: 1px solid black;
`;
export const CardFooter = styled.div`
    height: 15%;
    border: 1px solid black;
`;