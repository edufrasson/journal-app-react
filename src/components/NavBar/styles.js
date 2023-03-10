import styled from "styled-components";
import { IoBook } from 'react-icons/io5';
import { Link } from "react-router-dom";

export const NavBarContainer = styled.div`
    background-color: #D1D1D1;
    width: 100%;
    height: 10%;    

    display: flex;
    justify-content: space-around;

    box-shadow: 9px 30px 29px -20px rgba(0,0,0,0.14);
    margin-bottom: 30px;

    @media (max-width: 500px) {
        font-size: 12px
    }
`;
export const ImageContainer = styled.div`
    //border: 1px solid black;   
    padding-left: 15px;
    width: 75%;
    display: flex;
    align-items: center;
    column-gap: 15px;
   
`;
export const LogoIcon = styled(IoBook)`
    width: 60px;
    height: 60px;

    @media (max-width: 500px) {
        width: 45px;
        height: 45px;
    }
`;

export const ActionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 30px;
    padding-right: 30px;
`;
export const TextContainer = styled.div`
    height: 100%;
    margin-right: 5%;
    ul{
        display: flex;
        align-items: center;
        height: 100%;
        column-gap: 20px;
        
    }

    li{        
        display: flex;
        flex-direction: row;
        column-gap: 20px;
        margin-right: 5%;
    }
`;

export const LinkStyle = styled(Link)`
    text-decoration: none;
    color: #1e1e1e;
`;





