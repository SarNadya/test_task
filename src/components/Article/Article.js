import React from 'react';
import styles from './Article.module.scss';

function Article() {
    return (
        <div className={styles.wrap}>
            <div className={styles.art}>
                <h1 className={styles.title}> Как бизнесу сохранять <br/>IT-кадры на фоне кризиса </h1>
                <p> Инструменты, которые могут использовать компании <br/>для удержания сотрудников </p>
                <button className={styles.btn}> Подробнее </button>
                <div className={styles.dots}>
                    <button/>
                    <button/>
                    <button/>
                </div>
            </div>
        </div>
    );
}

export default Article;