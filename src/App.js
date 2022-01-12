import './App.css';
import React from "react";
import SearchField from './components/SearchField';
import TrendingGifs from './components/TrendingGifs';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import RandomSearch from './components/RandomSearch';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
        <Route path="/" exact component={TrendingGifs}/>
        <Route path="/Search" component={SearchField}/>
        <Route path="/Random" component={RandomSearch}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

