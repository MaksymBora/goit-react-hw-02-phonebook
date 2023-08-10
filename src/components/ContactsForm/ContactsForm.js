import { Formik, Field, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const ContactsSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  number: Yup.string().min(6).max(10).required(''),
});

const initialValues = { name: '', number: '' };

export const ContactsForm = ({ onAdd }) => {
  const handleSubmit = (values, { resetForm }) => {
    onAdd({ ...values, id: nanoid() });
    console.log(values, 'form test');
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactsSchema}
      onSubmit={handleSubmit}
    >
      {props => (
        <Form autoComplete="off">
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
