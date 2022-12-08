
import styled from 'styled-components';

export const ContactList = styled.ul`
  margin: 10px 0 10px 0;
  padding: 0;
`;

export const ItemsContact = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

  margin-bottom: ${p=>p.theme.space[2]}px;
  font-family: ${p=>p.theme.fonts.monospace};

`;

export const DeleteBtn = styled.button`

    color: ${p=>p.theme.colors.secondText};
    background-color: ${p=>p.theme.colors.bcBtn};
    margin-left: 15px;

    border: ${p=>p.theme.borders.border};
    border-radius: ${p=>p.theme.space[1]}px;

    height:25px;

    &:hover{
        transform: scale(1.1);
        background-color: ${p=>p.theme.colors.delBtn};
    }
`;

export const Notification = styled.p`
    padding: 0;
    margin:0;
    text-align: center;

    color: ${p=>p.theme.colors.delBtn};
    font-family: ${p=>p.theme.fonts.gillSans};
`;
