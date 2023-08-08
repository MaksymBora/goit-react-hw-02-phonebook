import { nanoid } from 'nanoid'

import { Component } from 'react';


// const INITIAL_STATE = {
//   contacts: [],
//     name: '',
    
// }

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    
    let newContact = { name: this.state.name, id: nanoid() };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
    }));
   

  };
  

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Z'\- ]+$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required />
            <button type="submit">Add Contanct</button>
          </form>
          <p>{this.contacts}</p>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(contact => {
              return (
                    <li key={contact.id}>{contact.name}</li>
                 )
              })}
            
          </ul>
        </div>
      </>
    )
    
  }

};
