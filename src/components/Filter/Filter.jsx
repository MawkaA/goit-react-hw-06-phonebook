import React from 'react';
import css from './Filter.module.css';

const Filter = ({ filterText, changeFilter }) => (
    <label className={ css.label}>
        Find contacts by name
        <input className={ css.input} 
         type="text"
         value={filterText}
         onChange={changeFilter}
        placeholder="Enter name" />
    </label>
);

export default Filter;