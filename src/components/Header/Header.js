import React from 'react';
import styles from './Header.module.scss';
import logo from './img/logo.jpg';

function Header() {
    return (
        <div className={styles.wrap}>
            <img src={logo} alt='logo' className={styles.logo}/>
            <div className={styles.info}>
                <div className={styles.tel}> 8 800 000 00 00 </div>
                <div> sales@logo.ru </div>
            </div>
        </div>
    );
}

export default Header;