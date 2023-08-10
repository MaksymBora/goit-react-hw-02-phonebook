import { Formik, Field, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const ContactsSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  number: Yup.string().min(6).max(10).required(''),
});

export const ContactsForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactsSchema}
      onSubmit={(values, { resetForm }) => {
        values.id = nanoid();
        onAdd(values);
        resetForm();
      }}
    >
      {props => (
        <Form>
          <Field
            onChange={props.handleChange}
            value={props.values.name}
            name="name"
            placeholder="Jane"
          />
          <ErrorMessage component="div" name="name" />
          <Field
            onChange={props.handleChange}
            value={props.values.number}
            name="number"
            placeholder="Enter Phone"
          />
          <ErrorMessage component="div" name="number" />
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

ContactsForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
