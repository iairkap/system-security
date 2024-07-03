import React from 'react';
import type { AboutMe } from '../types/types';
import styles from "../style/aboutMe.module.css"
import useModal from '../hooks/useModal'
import Button from './Button';
import ReadMoreAboutMe from './readMoreAboutMe';
import { truncateText } from '../helpers/truncedText';
function About({ aboutMe }: AboutMe) {

    const { isOpen, toggleModal, onRequestClose } = useModal()

    const truncatedAboutMe = truncateText(aboutMe, { maxLength: 280 });


    return (
        <section className={styles.textContainer}>
            <span className={styles.text}>
                {truncatedAboutMe}
            </span>
            <Button onClick={toggleModal} styleButton={"smallButton"}>Leer Mas</Button>

            {
                isOpen && <ReadMoreAboutMe aboutMe={aboutMe} isOpen={isOpen} onRequestClose={onRequestClose} />
            }
        </section>
    );
}

export default About;