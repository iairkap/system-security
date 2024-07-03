"use client"

import React from 'react';
import Input from "./Input";
import TextArea from "./TextArea";
import useForm from "../hooks/useForm";
import styles from '../style/contactForm.module.css';
import Button from './Button';

interface Props { }

const ContactForm: React.FC<Props> = () => {
    const { formData, handleChange, handleSubmit, errors } = useForm({ name: '', email: '', message: '' });

    const onFormSubmit = (): void => {
        alert('Message sent!');
    };

    return (
        <div className={styles.contactFormContainer}>
            <h1 className={styles.title}>Hey! Quieres trabajar conmigo?</h1>
            <form onSubmit={(e) => handleSubmit(e, onFormSubmit)} className={styles.form}>
                <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} error={errors.name} />
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
                <TextArea id="message" name="message" value={formData.message} onChange={handleChange} error={errors.message} />
                <Button type="submit" styleButton="secondaryButton" >Submit</Button>
            </form>
        </div>
    );
};

export default ContactForm;