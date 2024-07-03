import React from 'react';
import type { Interest } from '../types/types';
import styles from "../style/interests.module.css"

interface InterestsProps {
    interests: Interest[];
}

function Interests({ interests }: InterestsProps) {
    return (
        <div className={styles.generalContainer}>
            <span className={styles.sub}>Hobbies</span>
            <ul className={styles.listContainer}>
                {interests.map((interest) => (
                    <li key={interest.id} className={styles.interest}>{interest.interest}</li>
                ))}
            </ul>
        </div>
    );
}

export default Interests;