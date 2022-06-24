import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Article from '../Article/Article';
import PostList from '../PostList/PostList';
import Footer from '../Footer/Footer';
import styles from './App.module.scss';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc';
    axios.get(apiUrl).then((response) => {
      const posts = response.data.articles;
      setPosts(posts);
    });
  }, [setPosts]);

  return (
    <div className={styles.wrap}>
      <Header/>
      <Article/>
      <PostList posts={posts}/>
      <Footer/>
    </div>
  );
}

export default App;
