import { nanoid } from 'nanoid'
import React, { Component } from 'react';


export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: '',
      name: '',
      number: ''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }
  
  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeNumber(event) {
  this.setState({number: event.target.value});
  }
  

  handleSubmit = event => {
    event.preventDefault();
    
    let newContact = { name: this.state.name, id: nanoid(), number: this.state.number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
   

  };
  

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
            <input
              value={this.state.name}
              onChange={this.handleChangeName}
              type="text"
              name="name"
              pattern="^[a-zA-Z'\- ]+$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required />
            </label>
            <input
              value={this.state.number}
              onChange={this.handleChangeNumber}
              type="tel"
              name="number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              title="073-000-0000"
              required
            />

            <button type="submit">Add Contanct</button>
          </form>

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
      </>
    )
    
  }

};
