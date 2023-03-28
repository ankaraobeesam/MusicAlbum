import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Searchbox from './Components/Searchbox';
import SearchList from './Components/SearchList';
import axios from 'axios';
function App() {
  return (
    <div>
      <Searchbox/> 
  </div>
  );
}

export default App;
