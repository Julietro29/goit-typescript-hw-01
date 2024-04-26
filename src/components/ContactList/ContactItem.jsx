import styles from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { FaUser, FaPhone } from 'react-icons/fa';
import { CustomButton } from '../CustomButton/CustomButton';
import { CAPTION_DELETE } from '../../auxiliary/constants';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <div className={styles.info}>
        <p className={styles.name}>
          <FaUser /> {contact.name}
        </p>
        <p className={styles.phone}>
          <FaPhone /> {contact.number}
        </p>
      </div>
      <CustomButton onClick={handleDeleteClick} typeBtn={'button'}>
        {CAPTION_DELETE}
      </CustomButton>
    </>
  );
};
