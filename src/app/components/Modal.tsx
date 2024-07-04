import React from 'react';
import ReactModal from 'react-modal';
import styles from "../style/modalLayout.module.css"


function Modal({ children, isOpen, onRequestClose }: { children: React.ReactNode, isOpen: boolean, onRequestClose: () => void }) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={styles.content}
            overlayClassName={styles.overlay}
        >
            {children}
        </ReactModal>
    );
}

export default Modal;