import React from 'react';
import HomePage from "./pages/Homepage"
import AboutPage from './pages/AboutPage'
import ArticlesList from './pages/ArticlesList'
import ArticlePage from './pages/ArticlePage'
import NavBar from './NavBar'

import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Route  path="/" component={HomePage} exact />
          <Route  path="/about" component={AboutPage}/>
          <Route  path="/articles-list" component={ArticlesList} />
          <Route  path="/article" component={ArticlePage} />
          <Route  path="/" component={HomePage} exact />

        </div>
       
      </div>
    </Router>    
  );
}

export default App;
