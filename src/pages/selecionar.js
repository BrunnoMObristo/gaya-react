import React from 'react';
import {useEffect, useState} from 'react';
import Header from '../header';
import axios from 'axios';
import {Link} from 'react-router-dom';
 
function Selecionar(){

    const [lojas, setLojas] = useState([]);
 
    useEffect(() => {
        axios.get('http://localhost:3030/lojas/selecionar').then(response => {
            const lista = response.data;
            if (lista.length === 0) {
                return Promise.reject(new Error("Não ha registros para serem exibidos!"));
            }
            setLojas(lista);
        }).catch( error => {console.log(error)})
    }, []);


    return (
        <div>
            <Header title="" /> 
            <div>
            <Link to="/incluir">Incluir</Link>                         
            </div>
                         <table><thead>
                         <tr>
                                    <th class="col" scope="col" ></th>
                                    <th class="col" scope="col" ></th>
                                    
                                </tr>
                                </thead>
                                <tbody>
                    { lojas.map(loja => (                                                                                                                                            
                            <tr key={loja.id}>
                                <ul>
                                    <li> <td> 
                                        <img src="https://previews.123rf.com/images/robuart/robuart1601/robuart160100363/51593901-store-icon-shop-icon-flat-design-shop-or-market-cartoon-shop-market-store-or-cafe-shop-store-isolate.jpg" className="rounded-corner"></img> </td></li>
                                <li><td><span class="pontuacao">Pontuação:</span> G$ 10.000,00</td></li>                               
                                </ul>
                                <div class="desc">
                                <ul>
                                <li><td><span class="nomeLoja">{loja.nome_fantasia}</span></td></li>
                                <li><td><span class="descLoja">{loja.descricao}</span></td></li>
                                </ul>
                                </div>
                                <td></td>
                            </tr>
                           
                    )) }                </tbody>
                        </table>    
        </div>        
    )
}
 
export default Selecionar;