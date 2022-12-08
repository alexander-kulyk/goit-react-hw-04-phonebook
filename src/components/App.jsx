
import React, { useState } from "react";
import { nanoid } from 'nanoid';
import { ThemeProvider } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';

import { theme } from "../theme/theme";
import { Contact } from "./ContactList/ContactList";
import Container from "./Container/Conteiner.styled";
import { ContactForm } from "./Form/Form";
import { Filter } from "./Filter/Filter";
import { PrimaryTitle, SecondaryTitle } from "./Titles/Titles";
import { useLocalStorage } from "../hooks/useLocalStorage";

import 'react-toastify/dist/ReactToastify.css';

const CONTACTS_KEY = 'contacts';
const initContacts =[
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

export const App = () =>{

  console.log(useLocalStorage(CONTACTS_KEY, initContacts))

  const [contacts, setContacts] = useLocalStorage(CONTACTS_KEY, initContacts)
  //const [contacts, setContacts] = useState(()=> JSON.parse(window.localStorage.getItem(CONTACTS_KEY)) ?? initContacts);
  const [filter, setfFilter] = useState('');


  // useEffect(() => {

  //   localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
    
  // }, [contacts])

 
  const handleSubmit = (values, {resetForm}) =>{
      addNewCotact(values, resetForm)
  
  };
  
  
  const addNewCotact = (values, resetForm) =>{

    const notify = (name) => toast.error(`${name} is already in contacts.`);

    const {name, number} = values;

    // const checkContact = contacts.some(item => item.name === name);
    const checkContact = contacts.find(item => item.name === name);
    
    const newContact = {
      id: nanoid(),
      name,
      number
    }

    if (checkContact !== undefined) {
        // alert(`${name} is already in contacts.`)
      notify(name)
    }else{
      setContacts(pS =>([newContact, ...pS]));

      resetForm()
    }
  }

const deleteContact = contactId =>{
  setContacts(pS =>(pS.filter(({id}) => id !== contactId)))
};

const handleFindContact = e => setfFilter(e.target.value);


const  getVisibleContact = () =>{

  const normalizeFilter = filter.toLocaleLowerCase()

  return contacts.filter(({name})=>
      name.toLocaleLowerCase().includes(normalizeFilter))
};

const visibleContact = getVisibleContact();


  return (

    <ThemeProvider theme={theme}>
      <Container>
        <ToastContainer/>

        <Container
          display="flex"
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          bg='#ededf0'
          p={4}
          boxShadow="0px 2px 10px -3px rgba(0,0,0,0.3)"
          
        >
          <PrimaryTitle>Phonebook</PrimaryTitle>
            <ContactForm 
              handleSubmit = {handleSubmit}
            />
        </Container>

        <Container
          display="flex"
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <SecondaryTitle>Contact</SecondaryTitle>
            <Filter 
              title="Find contacs by name"
              filter = {filter}
              handleFindContact = {handleFindContact}
              />
            <Contact 
              visibleContact = {visibleContact}
              deleteContact = {deleteContact}
              contacts = {contacts}
            />
        </Container>

      </Container>
    </ThemeProvider>
  );
    

}
