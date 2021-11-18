import React from 'react';
import Header from '../header';
import logo from '../logo.svg';	
import {Link} from 'react-router-dom';
import '../index.css'
 
function Home(){  
  
    return (
      <div>        
        <Header title="Gaya" />
        <img src={logo} className="img" alt="logo" /> <br/>
        <Link to="/incluir">Incluir uma nova loja</Link> <br/>
        <Link to="/selecionar">Listagem dos registros</Link>
      </div>
    );
}
 
export default Home;