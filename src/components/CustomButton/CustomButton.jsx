import styles from './CustomButton.module.css';

export const CustomButton = ({ onClick, typeBtn, children }) => {
  return (
    <button className={styles.btn} onClick={onClick} type={typeBtn}>
      {children}
    </button>
  );
};