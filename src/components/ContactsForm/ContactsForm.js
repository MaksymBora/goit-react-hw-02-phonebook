import { Formik, Field, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const ContactsSchema = Yup.object().shape({
  contacts: Yup.array()
    .of(
      Yup.object().shape({
        type: Yup.string().required('Type is required'),
      })
    )
    .required('At least one contact is required'),
  name: Yup.string()
    .min(2, 'Name is too short')
    .max(50, 'Name is too long')
    .required('Name is required'),
});

export const ContactsForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
      }}
      validationSchema={ContactsSchema}
      onSubmit={(values, { resetForm }) => {
        values.id = nanoid();
        onAdd(values);

        console.log(values);

        resetForm();
      }}
    >
      {props => (
        <Form>
          <Field
            onChange={props.handleChange}
            vlaue={props.values.name}
            name="name"
            placeholder="Jane"
          />
          <ErrorMessage component="div" name="name" />
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};
