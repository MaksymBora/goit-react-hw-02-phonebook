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
      number: ''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
            <label>Name</label>
            <input
              value={this.state.name}
              onChange={this.handleChangeName}
              type="text"
              name="name"
              pattern="^[a-zA-Z'\- ]+$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required />
            
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
          <p>{this.contacts}</p>
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
