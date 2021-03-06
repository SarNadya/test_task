import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Article from '../Article/Article';
import PostList from '../PostList/PostList';
import Footer from '../Footer/Footer';
import styles from './App.module.scss';
import axios from 'axios';
import OnLoadingPostsData from '../OnLoadingPostsData/OnLoadingPostsData';
import AuthorSelect from '../AuthorSelect/AuthorSelect';
import DateSelect from '../DateSelect/DateSelect';

function App() {
  const DataLoading = OnLoadingPostsData(PostList);
  const [posts, setPosts] = useState(
    {
      articles: [],
      filteredArticles: [],
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
      const newArticles = articles.map(article => ({
        ...article,
        author: article.author === null ? 'нет автора' : article.author
      }));

      setPosts({
        ...posts,
        articles: newArticles,
        filteredArticles: newArticles
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

  function getSortedPosts(value) {
    const sortedArticles = posts.articles.filter(article => article.author === value.author);
    if (sortedArticles.length > 0) {
      setPosts({
        ...posts,
        filteredArticles: sortedArticles
      })
    }
  };

  function getSortedPostsDate(value) {
    const startDate = new Date(value[0]);
    const endDate = new Date(value[1]);
    const particles = posts.articles;
    const dateArticles = particles.map(article => ({
      ...article,
      publishedAt: new Date(article.publishedAt)
    }));
    const sortedArticles = dateArticles.filter(article => article.publishedAt > startDate && article.publishedAt < endDate);
    if (sortedArticles.length > 0) {
      setPosts({
        ...posts,
        filteredArticles: sortedArticles
      })
    } else {
      setPosts({
        ...posts,
        filteredArticles: []
      });
    }
  };

  return (
    <div className={styles.wrap}>
      <Header/>
      <Article/>
      <div className={styles.form_select}>
        <AuthorSelect articles={posts.articles} getSortedPosts={getSortedPosts}/>
        <DateSelect articles={posts.articles} getSortedPostsDate={getSortedPostsDate}/>
      </div>
      <DataLoading isLoading={posts.loading} articles={posts.filteredArticles} requestError={posts.requestError} err={posts.error}/>
      <Footer/>
    </div>
  );
}

export default App;
