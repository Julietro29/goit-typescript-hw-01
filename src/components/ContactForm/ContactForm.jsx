import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { Feedback } from '../../auxiliary/feedback';
import { CustomButton } from '../CustomButton/CustomButton';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={Feedback}
    >
      <Form className={styles.contactForm}>
        <div className={styles.info}>
          <div>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <Field
              className={styles.input}
              id="name"
              type="text"
              name="name"
            />
            <span className={styles.error}>
              <ErrorMessage name="name" as="span" />
            </span>
          </div>
          <div>
            <label className={styles.label} htmlFor="number">
              Phone
            </label>
            <Field
              className={styles.input}
              id="number"
              type="tel"
              name="number"
            />
            <span className={styles.error}>
              <ErrorMessage name="number" as="span" />
            </span>
          </div>
        </div>
        <CustomButton type="submit">Add</CustomButton>
      </Form>
    </Formik>
  );
};
