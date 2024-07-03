import React from 'react';
import type { ButtonProps } from '../types/types';
import styles from "../style/button.module.css"




interface ExtendedButtonProps extends ButtonProps {
    type?: 'button' | 'submit' | 'reset';
}
const Button: React.FC<ExtendedButtonProps> = ({ children, onClick, styleButton, type = 'button' }) => {
    return (
        <button onClick={onClick} className={styles[styleButton]} type={type}>
            {children}
        </button>
    );
};

export default Button;