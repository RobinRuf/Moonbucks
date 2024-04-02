'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from '../styles/Form.module.css';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [fieldErrors, setFieldErrors] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formData.firstName,
      lastName: !formData.lastName,
      email: !/\S+@\S+\.\S+/.test(formData.email),
      subject: !formData.subject,
      message: !formData.message,
      phone: formData.phone ? !/^(\+\d{1,2}\s?)?\d{10}$/.test(formData.phone) : false,
    };
    setFieldErrors(errors);
    return Object.values(errors).every((isValid) => !isValid);
  };

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
        const submittedData = {
            ...formData,
            timestamp: new Date().toISOString(),
        };
        console.log(submittedData);
    }
};

  return (
    <section className={styles.contentSection}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
          placeholder="Vorname *"
          className={fieldErrors.firstName ? styles.invalid : ''}
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
          placeholder="Name *"
          className={fieldErrors.lastName ? styles.invalid : ''}
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Telefon"
          className={fieldErrors.phone ? styles.invalid : ''}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          placeholder="E-Mail *"
          className={fieldErrors.email ? styles.invalid : ''}
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          placeholder="Betreff *"
          className={fieldErrors.subject ? styles.invalid : ''}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          placeholder="Text *"
          className={fieldErrors.message ? styles.invalid : ''}
        />
        <button type="submit">
          Absenden
        </button>
      </form>
    </section>
  );
};

export default Form;
