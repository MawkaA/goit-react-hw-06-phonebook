// import { nanoid } from 'nanoid';
import React, { useState } from "react";
import css from './ContactForm.module.css';
import PropTypes from "prop-types";


export default function ContactForm ({ onSubmit }) {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      switch (name) {
        case "name":
          setName(value);
          break;
        case "number":
          setNumber(value);
          break;
  
        default:
          break;
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, number });
      reset();
    };
    const reset = () => {
      setName("");
      setNumber("");
    };

        return(
            <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label}> Name
            <input 
                   className={css.input}
                   value={name}
                   type="text"
                   name="name"
                   onChange={handleChange}
                   placeholder="Enter name"
                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                   required>
                   </input>
                   </label>
            <label className={css.label}>Number
            <input className={css.input}
                    type="text"
                    name='number'
                    value={number}
                    onChange={handleChange}
                   placeholder="Enter phone number"
                   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                   required>
                   </input>
                   </label>
            <button className={css.button} type="submit">Add Contact</button>
        </form>
    )
          
} 
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  