import PropTypes  from "prop-types"
import { ContactList, ItemsContact,DeleteBtn, Notification } from "./ContactList.styled"


export const Contact = ({visibleContact, deleteContact, contacts}) =>{
    
    return(
        <ContactList>
          
            { contacts.length === 0
                ? <Notification>You have no contacts</Notification>
                : visibleContact.length === 0
                    ? <Notification>contact not found</Notification>
                    : visibleContact.map(({id, name, number}) =>(
                        <ItemsContact 
                        key={id}>{name}: {number} <DeleteBtn type="button" onClick={()=>deleteContact(id)}>delete</DeleteBtn>
                        </ItemsContact>
             
                    ))
            }
            
        </ContactList>
    )
}


Contact.propTypes = {
    visibleContact: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })),
    deleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    )
    
}