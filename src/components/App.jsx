import React, { Component } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    };
  
  addContact = (newContact) => {
    console.log(newContact, 'Test App')
    this.setState(prevState => ({
      contacts: [ ...prevState.contacts, newContact]
    }));
  };

  render() {
    return (
      <div>
        <ContactsForm onAdd={ this.addContact } />
          <p>Find contacts by name</p>
          <input
            type="text"
            placeholder="Filter contacts"/>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(contact => {
              return (
                <li key={contact.id}>{contact.name}: { contact.number}</li>
                 )
              })}
            
          </ul>
      </div>
    )
  }

};
