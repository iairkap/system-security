import { ChangeEvent } from 'react';
import type { TextAreaProps } from '../types/types';
import styles from "../style/textArea.module.css"
import getClassName from '../utils/className';

const TextArea: React.FC<TextAreaProps> = ({ id, name, value, onChange, error }) => {

    const textAreaClassName = getClassName(styles, 'textArea', !!error);
    return (
        <div className={styles.container}>
            <div className={styles.labelErrorContainer}>
                <label htmlFor={id} className={styles.label}>{name}:</label>
                {error && <span className={styles.error}>{error}</span>}
            </div>
            <textarea id={id} name={name} value={value} onChange={onChange} className={textAreaClassName} rows={10} />
        </div>
    );
};

export default TextArea;