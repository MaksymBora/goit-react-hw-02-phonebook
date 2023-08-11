import PropTypes from 'prop-types';
import { ContactItem } from './ContactsList.styled';

export const ContactList = ({ filteredContacts }) => {
  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <ContactItem key={contact.id}>
            {contact.name}: {contact.number}
          </ContactItem>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
