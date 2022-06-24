import React from 'react';
import styles from './Footer.module.scss';
import logo_white from './img/logo-white.png';
import logo_telegram from './img/logo-telegram.png';
import logo_vk from './img/logo-vk.png';
import logo_twitter from './img/logo-twitter.png';
import logo_youtube from './img/logo-youtube.png';

function Footer() {
    return (
        <div className={styles.wrap}>
            <div className={styles.menu}>
                <img src={logo_white} alt='logo'/>
                <div className={styles.info}>
                    <a href='#'> Готовые решения </a>
                    <a href='#'> О нас </a>
                    <a href='#'> Блог </a>
                    <a href='#'> Контакты </a>
                </div>
            </div>

            <div className={styles.menu}>
                <div className={styles.name_company}> © ООО «Лого», 2008-2022</div>
                <div className={styles.social_networks}>
                    <img src={logo_telegram} alt='logo-telegram'/>
                    <img src={logo_vk} alt='logo-vk'/>
                    <img src={logo_twitter} alt='logo-twitter'/>
                    <img src={logo_youtube} alt='logo-youtube'/>
                </div>
            </div>
        </div>
    );
}

export default Footer;