import React from 'react';
import styles from './Header.module.scss';
import logo from './img/logo.svg';

function Header() {
    return (
        <div className={styles.wrap}>
            <img src={logo} alt='logo' className={styles.logo}/>
            <div className={styles.info}>
                <div className={styles.tel}>
                    <a href='tel:88000000000'> 8 800 000 00 00 </a>
                </div>
                <div className={styles.mail}>
                    <a href='mailto:sales@logo.ru'> sales@logo.ru </a>
                </div>
            </div>
        </div>
    );
}

export default Header;