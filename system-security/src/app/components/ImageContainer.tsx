import React from 'react';
import styles from "../style/header.module.css"
import type { HeaderProps } from '../types/types';
import Image from 'next/image';


function ImageContainer({ name, lastName, profilePicture, profession }: HeaderProps) {
    return (
        <article className={styles.headerContainer}>
            <div className={styles.portada}></div>
            <section className={styles.pictureContainer}>
                <Image src={profilePicture} alt={`Profile Picture ${name} ${lastName}`} layout='fill' objectFit='cover' />
            </section>
            <h2 className={styles.title}>{name} {lastName}</h2>
            <h4 className={styles.subtitle}>{profession}</h4>
        </article>
    );
}

export default ImageContainer;