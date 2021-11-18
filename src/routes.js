import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/home';
import FormIncluir from './pages/formincluir';
import Selecionar from './pages/selecionar';
 
function Routes(){
    return (
        <div className="App"> 
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={FormIncluir} path="/incluir"/>
            <Route component={Selecionar} path="/selecionar" />
        </BrowserRouter>
        </div>
    )
}
 
export default Routes;