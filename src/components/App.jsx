
import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { ThemeProvider } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';

import { theme } from "../theme/theme";
import { Contact } from "./ContactList/ContactList";
import Container from "./Container/Conteiner.styled";
import { ContactForm } from "./Form/Form";
import { Filter } from "./Filter/Filter";
import { PrimaryTitle, SecondaryTitle } from "./Titles/Titles";

import 'react-toastify/dist/ReactToastify.css';

const CONTACTS_KEY = 'contacts'

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter:''
  }
  componentDidUpdate(pP, pS){
    const {contacts} = this.state
    if (pS.contacts !== contacts) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts))
      
    }
  }
  componentDidMount(){
    const contactsRaw = localStorage.getItem(CONTACTS_KEY);
    const parseContacts = JSON.parse(contactsRaw);

    if (contactsRaw) {
      this.setState({contacts: parseContacts})
    }
   
  }

  handleSubmit = (values, {resetForm}) =>{
      this.addNewCotact(values, resetForm)
  }

  addNewCotact = (values, resetForm) =>{

    const notify = (name) => toast.error(`${name} is already in contacts.`);

    const {name, number} = values;
    const {contacts} = this.state

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
      this.setState(pS =>({
        contacts: [newContact, ...pS.contacts]
      }));

      resetForm()
  
    }
  }

  deleteContact = contactId =>{
    this.setState(pS =>({
      contacts: pS.contacts.filter(({id}) => id !== contactId)
    }))
  }

  handleFindContact = e =>{
    this.setState({filter: e.target.value})
  }

  getVisibleContact = () =>{
    const {contacts, filter} = this.state;
    const normalizeFilter = filter.toLocaleLowerCase()

    return contacts.filter(({name})=>
       name.toLocaleLowerCase().includes(normalizeFilter)
    )
  }


  render(){
    const {contacts} = this.state;
    const visibleContact = this.getVisibleContact();

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
                    state = {this.state} 
                    handelChangeInput={this.handelChangeInput}
                    handleSubmit = {this.handleSubmit}
                    addNewCotact = {this.addNewCotact}
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
                    state = {this.state}
                    handleFindContact = {this.handleFindContact}
                    />
                  <Contact 
                    visibleContact = {visibleContact}
                    deleteContact = {this.deleteContact}
                    contacts = {contacts}
                  />
              </Container>

            </Container>
          </ThemeProvider>
        );
  }

}



