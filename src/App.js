import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import './styles/style.css';

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Nav />

        <Route exact path="/" component={Home}></Route>
        <Route exact path="/shop" component={Shop}></Route>
      
      </BrowserRouter>

    </>
  );
}

export default App;
