
import {  Form, Field } from 'formik'
import styled from 'styled-components';


export const FormContact = styled(Form)`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    color: ${p=>p.theme.colors.grayText};
`;

export const Input = styled(Field)`
   margin-bottom:${p=>p.theme.space[3]}px;
   border: ${p=>p.theme.borders.border};
   border-radius: ${p=>p.theme.space[1]}px;

   height:20px;
`;

export const Button = styled.button`
    
    color: ${p=>p.theme.colors.secondText};
    background-color: ${p=>p.theme.colors.bcBtn};
    height: 30px;
    border: ${p=>p.theme.borders.border};
    border-radius: ${p=>p.theme.space[1]}px;

    &:hover{
        transform: scale(1.1);
    }

    cursor: pointer;
`;

