import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';


const ContactList = ({ contacts, filterText, deleteContact }) => {
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <ul className={css.contactList }>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.container}>
          <p className={css.name}>
            {name}: {number}
          </p>

          <button
            className={css.button}
            type="button"
            onClick={() => deleteContact(id)}
           >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filterText: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;