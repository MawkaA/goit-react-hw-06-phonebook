import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Notiflix from 'notiflix';
import Filter from './Filter/Filter';
import'./App.css';
import { getContacts, getFilter } from '../redux/contacts-selectors';
import { actions } from '../redux/contacts-slice';
import {getFilteredContacts} from '../shared/get-contacts';

export default function App() {
  const contacts = useSelector(getContacts, shallowEqual);
  const filter = useSelector(getFilter, shallowEqual);

  const dispatch = useDispatch();

  const addContact =contact=>{
    const action = actions.add(contact);
    const isDuplicated = contacts.find(({ name }) => name === contact.name);

    if (isDuplicated) {
      Notiflix.Report.warning('Oops', 'You already have this contact');
      return;
    }

    dispatch(action);
  };
  
  const changeFilter=({ target }) => {
    const action = actions.setFilter(target.value);

    dispatch(action);
  };
   
  const deleteContact=id => {
    const action = actions.delete(id);

    dispatch(action);
  };
  
  const filteredContacts=getFilteredContacts(filter, contacts);
  
  // const [contacts, setContacts] = useState([
  //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // ]);





return(
        <>
          <h1 className="title">Phonebook</h1>
          <ContactForm className="contact" onSubmit={addContact} />
          <h2 className="title">Contacts</h2>
          <Filter filterText={filter} changeFilter={changeFilter}/>
          <ContactList 
            contacts={filteredContacts}
            filterText={filter}
            deleteContact = { deleteContact }/> 
        </>
    );   
  
};
