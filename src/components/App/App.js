import React from 'react';
import Header from '../Header/Header';
import Article from '../Article/Article';
// import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.wrap}>
      <Header/>
      <Article/>
      <Footer/>
    </div>
  );
}

export default App;
