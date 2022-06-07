import React,{useState, useEffect, useRef} from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import {nanoid} from 'nanoid';
import Filter from './Filter/Filter';
import'./App.css';

export default function App() {

  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");
  const firstRender=useRef(true);
  useEffect(() => {
    console.log("use");
    const contact = localStorage.getItem("contact");
    const contactsParsed = JSON.parse(contact);
    if (contactsParsed?.length) {
      setContacts(contactsParsed);
    }
    firstRender.current=false;
  }, []);

  useEffect(() => {
    if (!firstRender.current){
    const newItems = JSON.stringify(contacts);
    localStorage.setItem('contacts', newItems);
  }
   }, [contacts])

  const addContact = (data) => {
    const { name, number } = data;
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    if (
      contacts.find((contact) =>contact.name.toLowerCase() === newContact.name.toLowerCase())
    ) {
      return alert(`${newContact.name} is already in contacts.`);
    }
    setContacts(prevState => [newContact, ...prevState]);
  };


  const deleteContact = (contactId) => {
    setContacts(prevState => (prevState.filter((contact) => contact.id !== contactId))
    );
  };

  const changeFilter = (event) => {
  setFilter(event.currentTarget.value );
};

//  const getVisibleContacts = contacts.filter((contact) =>
// contact.name.toLowerCase().includes(filter.toLowerCase())
// );

return(
        <>
          <h1 className="title">Phonebook</h1>
          <ContactForm className="contact" onSubmit={addContact} />
          <h2 className="title">Contacts</h2>
          <Filter filterText={filter} changeFilter={changeFilter}/>
          <ContactList 
            contacts={contacts}
            filterText={filter}
            // contacts = { getVisibleContacts }
            deleteContact = { deleteContact }/> 
        </>
    );   
  
};
