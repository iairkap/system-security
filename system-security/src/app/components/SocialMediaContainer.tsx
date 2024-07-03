import React from 'react';
import Button from './Button';
import type { SocialMedia } from '../types/types';
import styles from "../style/buttonContainer.module.css"

function SocialMediaContainer({ socialMedia }: { socialMedia: SocialMedia[] }) {
    return (
        <div className={styles.mainContainer}>
            {socialMedia.map((social) => (
                <Button key={social.id} onClick={() => window.open(social.url)} styleButton={"primaryButton"}>
                    <div className={styles.buttonSocialMedia}>
                        <img src={social.icon} alt={social.name} />
                        {social.name}
                    </div>
                </Button>
            ))}
        </div>
    );
}

export default SocialMediaContainer;