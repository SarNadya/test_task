import React from 'react';
import styles from './Footer.module.scss';
import logo_white from './img/logo-white.svg';
import logo_telegram from './img/logo-telegram.svg';
import logo_vk from './img/logo-vk.svg';
import logo_twitter from './img/logo-twitter.svg';
import logo_youtube from './img/logo-youtube.svg';

function Footer() {
    return (
        <div className={styles.wrap}>
            <div className={styles.menu}>
                <img src={logo_white} alt='logo' width='193px' height='48px'/>
                <div className={styles.info}>
                    <a href='#'> Готовые решения </a>
                    <a href='#'> О нас </a>
                    <a href='#'> Блог </a>
                    <a href='#'> Контакты </a>
                </div>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.name_company}> © ООО «Лого», 2008—2022</div>
                <div className={styles.social_networks}>
                    <img src={logo_telegram} alt='logo-telegram' width='15px' height='12.5px'/>
                    <img src={logo_vk} alt='logo-vk' width='17.5px' height='10.7px'/>
                    <img src={logo_twitter} alt='logo-twitter' width='15.9px' height='12.9px'/>
                    <img src={logo_youtube} alt='logo-youtube' width='17.5px' height='11.7px'/>
                </div>
            </div>
        </div>
    );
}

export default Footer;