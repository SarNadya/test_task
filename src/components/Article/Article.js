import React from 'react';
import styles from './Article.module.scss';

function Article() {
    return (
        <div className={styles.wrap}>
            <div className={styles.art}>
                <h1> Как бизнесу сохранять IT-кадры на фоне кризиса </h1>
                <p> Инструменты, которые могут использовать компании для удержания сотрудников </p>
                <button className={styles.btn}> Подробнее </button>
                <div>
                    <button/>
                    <button/>
                    <button/>
                </div>
            </div>
        </div>
    );
}

export default Article;