import { ChangeEvent } from 'react';
import type { TextAreaProps } from '../types/types';
import styles from "../style/textArea.module.css"

const TextArea: React.FC<TextAreaProps> = ({ id, name, value, onChange, required = false }) => {
    return (
        <div className={styles.container}>
            <label htmlFor={id} className={styles.label}>{name}:</label>
            <textarea id={id} name={name} value={value} onChange={onChange} required={required} className={styles.textArae} rows={10} />
        </div>
    );
};

export default TextArea;