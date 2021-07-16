import React from 'react';
import style from '../ContactList/contactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={style.list}>
    {contacts.map(({ name, number, id }) => (
      <>
        <h2>Contacts</h2>
        <li key={id}>
          <p>Name:{name}</p>
          <p>Number:{number}</p>
          <button id={id} onClick={onDeleteContact}>
            Delete
          </button>
        </li>
      </>
    ))}
  </ul>
);

export default ContactList;
