// import { nanoid } from 'nanoid'
import * as Yup from 'yup';
import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';



const ContactsSchema = Yup.object().shape({
  contacts: Yup.array()
    .of(
      Yup.object().shape({
        type: Yup.string()
          .required('Type is required')
      })
    )
    .required('At least one contact is required'),
  name: Yup.string()
    .min(2, 'Name is too short')
    .max(50, 'Name is too long')
    .required('Name is required'),
});


export class App extends Component {

  
  

  render() {
    return (
      <div>
        <Formik
        initialValues={{
            contacts: [],
            name: ''
          }}
          validationSchema={ContactsSchema}
          onSubmit={(values) => {
          console.log(values)
        }}
        >
          <Form>
            <label>
              Name
              <Field name="name" placeholder="Jane" />
            </label>
            <button type="submit">Add contact</button>
          </Form>
        </Formik>

          <p>Find contacts by name</p>
          <input
            type="text"
            placeholder="Filter contacts"/>
          <h2>Contacts</h2>
          {/* <ul>
            {this.state.contacts.map(contact => {
              return (
                <li key={contact.id}>{contact.name}: { contact.number}</li>
                 )
              })}
            
          </ul> */}
      </div>
    )
  }

};
