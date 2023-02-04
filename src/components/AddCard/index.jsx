import React, {useContext} from 'react';
import { CardContext } from '../../context/CardContext';
import { FormContainer, InputsContainer, LabelStyle, InputStyle, TextAreaStyle, InputsAreaContainer, ButtonStyle } from './styles';

export function AddCard() {
    const {
    handleSubmit,
    title, titleHandler,
    id, idHandler,
    content, contentHandler,
    category, categoryHandler    
    } = useContext(CardContext);

    return (
        <FormContainer onSubmit={handleSubmit}>
            <InputStyle type={'hidden'} value={id} onChange={idHandler}/>
            <InputsContainer>
                <LabelStyle>
                    Title
                </LabelStyle>
                <InputStyle value={title} onChange={titleHandler} />
            </InputsContainer>
            <InputsContainer>
                <LabelStyle>
                    Category
                </LabelStyle>
                <InputStyle value={category} onChange={categoryHandler} />
            </InputsContainer>
            <InputsAreaContainer>
                <LabelStyle>
                    Content
                </LabelStyle>
                <TextAreaStyle value={content} onChange={contentHandler} />
            </InputsAreaContainer>
            <InputsContainer>
                <ButtonStyle type='submit'>Add</ButtonStyle>
            </InputsContainer>

        </FormContainer>
    )
}