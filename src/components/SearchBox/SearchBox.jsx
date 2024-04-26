import { useId } from 'react';
import styles from './SearchBox.module.css';

export const SearchBox = ({ value, onChange, children }) => {
  const searchId = useId();
  return (
    <form className={styles.searchbox}>
      <label className={styles.label} htmlFor={searchId}>
        {children}
      </label>
      <input
        className={styles.input}
        id={searchId}
        type="text"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};
