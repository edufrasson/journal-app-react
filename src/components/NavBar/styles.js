import styled from "styled-components";
import {IoBook} from 'react-icons/io5';

export const NavBarContainer = styled.div`
    background-color: #D1D1D1;
    width: 100%;
    height: 10%;
    border: 1px solid black;

    display: flex;
    justify-content: space-between;

    box-shadow: 9px 30px 29px -20px rgba(0,0,0,0.14);
`;
export const ImageContainer = styled.div`
    //border: 1px solid black;   
    padding-left: 15px;

    display: flex;
    align-items: center;
    column-gap: 15px
   
`;
export const LogoIcon = styled(IoBook)`
    width: 60px;
    height: 60px;
`;
export const LinkContainer = styled.div``;
export const TextContainer = styled.div``;