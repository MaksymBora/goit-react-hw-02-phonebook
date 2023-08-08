// import { nanoid } from 'nanoid'

import { Component } from 'react';


export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  
  render() {
    return (
      <>
        <div>
          <form>
            <label>Name</label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Z-' ]+$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required />
            <button>Add Contanct</button>
          </form>

          <h2>Contacts</h2>
          <ul>
            <li>
            </li>
          </ul>
        </div>
    </>)
    
  }

};
