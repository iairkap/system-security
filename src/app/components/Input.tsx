import { ChangeEvent } from 'react';
import type { InputProps } from "../types/types";
import styles from "../style/input.module.css"

const Input: React.FC<InputProps> = ({ id, name, type, value, onChange, error }) => {
    return (
        <div className={styles.inputContainer}>
            <div className={styles.labelErrorcontainer}>

                <label htmlFor={id} className={styles.label}>{name}:</label>
                {error && <div className={styles.error}>{error}</div>}
            </div>
            <input type={type} id={id} name={name} value={value} onChange={onChange} className={styles.input} />
        </div>
    );
};

export default Input;