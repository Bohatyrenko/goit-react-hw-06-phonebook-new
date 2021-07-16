import React from 'react';
import style from '../ContactFilter/contactFilter.module.css';

const ContactFilter = ({ onSetFilter, filter }) => (
  <>
    <label>
      <p>Search for contacts</p>
      <input onInput={onSetFilter} type="text" name="filter" value={filter} />
    </label>
  </>
);

export default ContactFilter;
