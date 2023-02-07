import styled from "styled-components";

export const FormContainer = styled.form`
    width: 40%;
    height:68vh;
    padding: 20px;
    margin-bottom: -43px;
    border-radius: 8px;
    border: 1px solid black;
    box-shadow: 9px 9px 63px -14px rgba(0,0,0,0.45);

    display: flex;
    flex-direction: column;

    @media(max-width: 1000px){
        width: 50%;
    }
    @media(max-width: 700px){
        width: 65%;
    }
`;
export const InputsContainer = styled.div`
    width:100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 8px;
`;

export const InputsAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;    
    margin-bottom: 10px;
`;
export const LabelStyle = styled.div`
    font-weight: 500;
`;
export const InputStyle = styled.input`
    width: 100%;
    padding: 3px;    
   
`;

export const TextAreaStyle = styled.textarea`
    width: 100%;
    height: 100%;
    padding: 5px;
`;

export const ButtonStyle = styled.button`
   width: 30%;
   border: none;
   background-color: #7ddb7a;
   font-size: 16px;
   padding: 5px;
   border-radius: 5px;

   &:hover{
    transition: 0.7ms;
    opacity: 0.88;
   }
`;