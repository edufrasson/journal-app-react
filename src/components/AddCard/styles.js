import styled from "styled-components";

export const FormContainer = styled.form`
    width: 35%;
    height: 70vh;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid black;
    box-shadow: 10px 10px 159px -80px rgba(0,0,0,0.45);

    display: flex;
    flex-direction: column;
`;
export const InputsContainer = styled.div`
    width:100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;
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