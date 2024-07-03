import { ChangeEvent } from 'react';
import type { InputProps } from "../types/types";
import styles from "../style/input.module.css"

const Input: React.FC<InputProps> = ({ id, name, type, value, onChange, error }) => {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={id} className={styles.label}>{name}:</label>
            <input type={type} id={id} name={name} value={value} onChange={onChange} className={styles.input} />
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default Input;