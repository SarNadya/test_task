import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Article from '../Article/Article';
import PostList from '../PostList/PostList';
import Footer from '../Footer/Footer';
import styles from './App.module.scss';
import axios from 'axios';
import OnLoadingPostsData from '../OnLoadingPostsData/OnLoadingPostsData';

function App() {
  const DataLoading = OnLoadingPostsData(PostList);
  const [posts, setPosts] = useState(
    {
      articles: [],
      loading: false,
      requestError: false,
      error: {}
    }
  );

  useEffect(() => {
    setPosts({ loading: true });
    const apiUrl = 'https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc';
    axios.get(apiUrl)
  
    .then((response) => {
      const articles = response.data.articles;
      setPosts({
        loading: false,
        articles: articles
      })
    })
  
    .catch(err => (
      setPosts({
        loading: false,
        requestError: true,
        error: err
      })
    ));

  }, [setPosts]);

  return (
    <div className={styles.wrap}>
      <Header/>
      <Article/>
      <DataLoading isLoading={posts.loading} articles={posts.articles} requestError={posts.requestError} err={posts.error}/>
      <Footer/>
    </div>
  );
}

export default App;
