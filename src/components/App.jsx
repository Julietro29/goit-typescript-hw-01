import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Title } from './Title/Title';
import { ContactsList } from './ContactList/ContactsList';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactForm } from './ContactForm/ContactForm';
import { fetchContacts, selectFilteredContacts, selectLoading } from '../redux/contactsSlice';
import { changeFilter } from '../redux/filtersSlice';
import { deleteContact, addContact } from '../redux/contactsSlice'; 

import { SEARCH_LABEL, TITLE } from '../auxiliary/constants';
import styles from './App.module.css';

const App = () => {
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(state => state.filters.name);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    dispatch(addContact({ ...newContact }));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleChangeSearch = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.container}>
      <Title>{TITLE}</Title>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onChange={handleChangeSearch}>
        {SEARCH_LABEL}
      </SearchBox>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ContactsList
          contacts={contacts}
          onDeleteContact={handleDeleteContact}
        />
      )}
    </div>
  );
};

export default App;
