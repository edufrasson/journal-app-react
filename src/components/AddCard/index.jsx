import React, {useState} from 'react';
import { FormContainer, InputsContainer, LabelStyle, InputStyle, TextAreaStyle, InputsAreaContainer, ButtonStyle } from './styles';

export function AddCard() {
 

    return (
        <FormContainer >
            <InputsContainer>
                <LabelStyle>
                    Title
                </LabelStyle>
                <InputStyle id='txtTitle' />
            </InputsContainer>
            <InputsContainer>
                <LabelStyle>
                    Category
                </LabelStyle>
                <InputStyle id='txtCategory'/>
            </InputsContainer>
            <InputsAreaContainer>
                <LabelStyle>
                    Content
                </LabelStyle>
                <TextAreaStyle id='txtContent'/>
            </InputsAreaContainer>
            <InputsContainer>
                <ButtonStyle type='submit'>Add</ButtonStyle>
            </InputsContainer>

        </FormContainer>
    )
}