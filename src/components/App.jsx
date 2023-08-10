import React, { Component } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactsList';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
    };
  
  addContact = (newContact) => {
    this.setState(prevState => ({
      contacts: [ ...prevState.contacts, newContact]
    }));
  };

  getContact = evt => {
    const searchQuerry = evt.currentTarget.value;
    this.setState({filter: searchQuerry})
}
  

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLocaleLowerCase()));
    return (
      <div>
        <ContactsForm onAdd={ this.addContact } />
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <Filter filter={ filter } getContact={this.getContact}  />
        <ContactList filteredContacts={ filteredContacts } />
      </div>
    )
  }

};
