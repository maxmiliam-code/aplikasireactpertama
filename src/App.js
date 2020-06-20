import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavbarComp from './Component/Fungsional/NavbarComp';
//import BootstrapComp from './Component/Class/BootstrapComp';
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp';
//import DetailComp from './Component/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
//import './App.css';
//import Home from './Component/Fungsional/Home';
//import Parent from './Component/Class/Parent';

const App = () => {
  return (
    <BrowserRouter>
    <NavbarComp/>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/mahasiswa" component={ListComp}/>
      <Route exact path="/mahasiswa/tambah" component={TambahComp}/>
      {/*<Route exact path="/detail/:id" component={DetailComp}/>*/}
    </Switch>
    </BrowserRouter>
      
   
  );
}

export default App;
