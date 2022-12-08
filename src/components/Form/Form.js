import PropTypes from 'prop-types';

import { Formik } from 'formik'
import { nanoid } from 'nanoid';
import { Button, FormContact, Input, Label } from "./Form.styled";


const idInputName = nanoid();
const idInputNamber = nanoid();

export const ContactForm = ({handleSubmit}) =>{
   
    return(
        <Formik initialValues={{ name:'', number:'' }} onSubmit={handleSubmit}>
               
                <FormContact>
                    <Label htmlFor={idInputName}>
                    Name  
                    </Label>
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required

                        id={idInputName}
                        />

                        <Label htmlFor={idInputNamber}>
                            Namber  
                        </Label>
                        <Input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required

                            id={idInputNamber}
                            />

                        <Button  type="submit">Add Contact</Button>
                </FormContact> 
        </Formik>
        )
    }

    ContactForm.propTypes = {
        handleSubmit: PropTypes.func.isRequired,
    }