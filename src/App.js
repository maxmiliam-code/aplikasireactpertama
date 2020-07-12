import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavbarComp from './Component/Fungsional/NavbarComp';
//import BootstrapComp from './Component/Class/BootstrapComp';
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp';
//import DetailComp from './Component/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Class/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Fungsional/HooksComp';
import HooksUseEffect from './Component/Hooks/Fungsional/HooksUseEffect';
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
      <Route exact path="/mahasiswa/edit" component={EditComp}/>
      <Route exact path="/kelas" component={KelasComp}/>
      <Route exact path="/hooks" component={HooksComp}/>
      <Route exact path="/useeffects" component={HooksUseEffect}/>

      {/*<Route exact path="/detail/:id" component={DetailComp}/>*/}
    </Switch>
    </BrowserRouter>
      
   
  );
}

export default App;
