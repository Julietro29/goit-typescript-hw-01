import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { ContactItem } from './ContactItem';
import styles from './ContactsList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.contacts}>
      {contacts.map((contact) => (
        <li className={styles.item} key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};
