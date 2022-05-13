import React, {useState, useEffect} from 'react' 
import './estilo.css'
import { Switch,  Route, Link, Routes } from 'react-router-dom';


import Form from "./pages/formulario"
import Esque from "./pages/esqueceu"
import Cad from "./pages/cadastro"
import Princ from './pages/principal'
import Perfil from './pages/perfil'
import Card from './pages/card';


function App() {
  return (
   
   <>
  

        <Switch>
            <Route exact path="/" component={Princ}/>
            <Route exact path="/formulario" component={Form}/>
            <Route exact path="/esqueceu" component={Esque}/>
            <Route exact path="/cadastro" component={Cad}/>
            <Route exact path="/perfil" component={Perfil}/>
            <Route exact path="/perfil"component={Card}/>
        </Switch>
        
   </>

      

       
       

    

  );
}

export default App;
