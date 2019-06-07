import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom" 

import './App.css';

// Importing Component

import Search from './components/search/Search'
import Snippet from './components/search/Snippet'
import Body from './components/body/Body'
import MainContent from './components/body/MainContent';

class App extends Component{
  render(){
    
    return (
      <Router>
        <div>
          <Route path="/search-list/" component = { Body } />
          <Route path="/main-content/" component = { MainContent } />
          <Route path="/" exact component = { Search } />

        </div>
      </Router>
    )
  }
}

export default App;
