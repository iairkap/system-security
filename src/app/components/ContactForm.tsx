"use client"

import React from 'react';
import useForm from "../hooks/useForm";
import styles from '../style/contactForm.module.css';
import Button from './Button';
import { formFields } from '../helpers/formFields';

interface Props { }

const ContactForm: React.FC<Props> = () => {
    const { formData, handleChange, handleSubmit, errors } = useForm({ name: '', email: '', message: '' });


    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        handleSubmit(event, () => {
            alert('Message sent!');
        });
    };
    return (
        <div className={styles.contactFormContainer}>
            <h1 className={styles.title}>Hey! Quieres trabajar conmigo?</h1>
            <form onSubmit={onFormSubmit} className={styles.form}>
                {formFields.map(({ id, name, type, component: Component }) => (
                    <Component
                        key={id}
                        id={id}
                        name={name}
                        type={type}
                        value={formData[name]}
                        onChange={handleChange}
                        error={errors[name]}
                    />
                ))}
                <Button type="submit" styleButton="secondaryButton">Submit</Button>
            </form>
        </div>
    );
};

export default ContactForm;