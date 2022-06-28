import React from 'react';
import styles from './PostList.module.scss';

function PostList ({articles,requestError, err}) {
    if (requestError) return (
        <div className={styles.err}> 
            <div>{err.name}</div>
            <div> {err.message} </div>
        </div>
    )

    return (
        <div className={styles.list}>
            {articles.map(article =>
                <div key={Math.random()} className={styles.item}>
                    <div className={styles.date}> {new Date(article.publishedAt).toLocaleString('ru', {day: 'numeric', month: 'long', year: 'numeric'})} </div>
                    <div className={styles.title}> {article.title} </div>
                    <div className={styles.content}> {article.description} </div>
                    <button> {article.author} </button>
                </div>
            )}
        </div>
    );
};

export default PostList;