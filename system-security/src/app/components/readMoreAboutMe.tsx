import React from 'react';
import Modal from './Modal';
import Button from './Button';
import styles from "../style/modalLayout.module.css"
function ReadMoreAboutMe({ aboutMe, isOpen, onRequestClose }: { aboutMe: string, isOpen: boolean, onRequestClose: () => void }) {
    return (
        <div className={styles.modalContainer}>
            <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
                <div className={styles.buttonContainer}>
                    <Button onClick={onRequestClose} styleButton={"smallButton"}>x</Button>
                </div>
                <span>{aboutMe}</span>
            </Modal>
        </div>
    );
}

export default ReadMoreAboutMe;