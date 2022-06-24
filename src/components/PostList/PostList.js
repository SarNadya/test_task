import React from 'react';
import styles from './PostList.module.scss';
// import PostItem from '../PostItem/PostItem';

function PostList ({posts}) {
    return (
        <div className={styles.list}>
            {posts.map(post =>
                <div key={post.author + post.publishedAt} className={styles.item}>
                    <div className={styles.date}> {new Date(post.publishedAt).toLocaleString('ru', {day: 'numeric', month: 'long', year: 'numeric'})} </div>
                    <div className={styles.title}> {post.title} </div>
                    <div className={styles.content}> {post.description} </div>
                    <button> {post.author} </button>
                </div>
            )}
        </div>
    );
};

export default PostList;