import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Article from '../Article/Article';
import PostList from '../PostList/PostList';
import Footer from '../Footer/Footer';
import styles from './App.module.scss';
import axios from 'axios';
import OnLoadingPostsData from '../OnLoadingPostsData/OnLoadingPostsData';
import AuthorSelect from '../AuthorSelect/AuthorSelect';

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

  // const [filteredPosts, setFilteredPosts] = useState(posts);

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

  // const filterAuthor = () => {
  //   const sortedArticles = posts.articles.filter(article => article.author === 'нет автора');
  //   return sortedArticles;
  //   // setPosts({
  //   //   filteredArticles: sortedArticles
  //   // });
  //   // console.log(posts.filteredArticles);
  // }

  

  function getSortedPosts() {
    const sortedArticles = posts.articles.filter(article => article.author === 'нет автора');
    if (sortedArticles.length > 0) {
      setPosts({
        ...posts,
        filteredArticles: sortedArticles
      })
    }
    
  };

  console.log(posts);

  return (
    <div className={styles.wrap}>
      <Header/>
      <Article/>
      <AuthorSelect articles={posts.articles} getSortedPosts={getSortedPosts}/>
      <DataLoading isLoading={posts.loading} articles={posts.filteredArticles} requestError={posts.requestError} err={posts.error}/>
      <Footer/>
    </div>
  );
}

export default App;
