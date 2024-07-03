"use client"

import React from 'react';
import Image from 'next/image';
import styles from "../style/header.module.css"

import type { HeaderProps } from '../types/types';
import { useContext } from 'react';
import { UserContext } from '../userContext';
import ImageContainer from './ImageContainer';
import About from './About';
import SocialMediaContainer from './SocialMediaContainer';
import Interests from "./Interests"



function Header() {
    const { userInfo } = useContext(UserContext);


    return (
        <header className={styles.userInfoContainer}>
            <ImageContainer name={userInfo.name} lastName={userInfo.lastName} profilePicture={userInfo.profilePicture} profession={userInfo.profession} />
            <About aboutMe={userInfo.aboutMe} />
            <SocialMediaContainer socialMedia={userInfo.socialMedia} />
            <Interests interests={userInfo.interests} />
        </header>
    );
}

export default Header;