import React from 'react';
import {useState} from 'react';
import Header from '../header';
import axios from 'axios';
import '../formincluir.css';
import {Link} from 'react-router-dom';

function Mensagem(props){     
    let mensagem = "";
    switch (props.status) {
        case 0: mensagem = 'Preencha os campos para novo cadastro.'; break;        
        case 1: mensagem = 'Cadastro executado com sucesso!'; break;
        case 2: mensagem = 'Erro ao efetuar o cadastro' + props.error; break;
        default: mensagem = "...em andamento";        
      }
    return <p> {mensagem} </p>
}
 
function FormIncluir(){
     
    const [campos, setCampos] = useState({        
        razao_social: '',
        cnpj: '',
        nome_fantasia: '',
		cep:'',
		endereco:'',
        telefone:'',
        descricao:''
    });

    const[status, setStatus] = useState(0); //inicia em novo cadastro
    const[error, setError] = useState(null); //inicia sem qualquer erro
   
    function executaChange(event){
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }

    function executaSubmit(event){
        event.preventDefault();
        setStatus(9);
        console.log(campos);   
        axios.post('http://localhost:3030/lojas/inserir', campos).then(response => {            debugger
            setStatus(1); //Cadastro executado com sucesso!              
        }).catch(error => {
            setError(error);
            setStatus(2);            
        });    
    }

    function executaNovoCadastroClick(event){
        setStatus(0); //volta status inicial
        setError(null); //zero erros se houver       
        window.document.getElementById('razao_social').value=""; //limpa campos do form
        window.document.getElementById('cnpj').value="";        
        window.document.getElementById('nome_fantasia').value="";   
		window.document.getElementById('cep').value="";    
		window.document.getElementById('endereco').value=""; 		
        window.document.getElementById('telefone').value="";                                               
        window.document.getElementById('descricao').value="";          
    }
 
    return (
    <div>
        <Header title="Cadastro de Lojas"/>
        <form onSubmit={executaSubmit}>
                                                       
                                
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="razao_social">Razão Social</label>
                    <input type="razao_social" class="form-control" name="razao_social" id="razao_social" placeholder="Razão Social" onChange={executaChange}/>
                </div>
                <div class="form-group col-md-4">
                    <label for="nome_fantasia">Nome Fantasia</label>
                    <input type="nome_fantasia" class="form-control" name="nome_fantasia" id="nome_fantasia" placeholder="Nome Fantasia" onChange={executaChange}/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-3">
                        <label for="cnpj">CNPJ</label>
                        <input type="cnpj" class="form-control" name="cnpj" id="cnpj" placeholder="CNPJ" onChange={executaChange}/>
                </div>
                <div class="form-group col-md-4">
                    <label for="telefone">Telefone</label>
                    <input type="telefone" class="form-control" name="telefone" id="telefone" placeholder="Telefone" onChange={executaChange}/>
                </div>
                <div class="form-group col-md-4">
                    <label for="cep">CEP</label>
                    <input type="cep" class="form-control" name="cep" id="cep" placeholder="Cep" onChange={executaChange}/>
                </div>
            </div>
            <div class="form-row" >                
                <div class="form-group col-md-12">
                    <label for="endereco">Endereço</label>
                    <input type="endereco" class="form-control" name="endereco" id="endereco" placeholder="Endereço" onChange={executaChange}/>
                </div>
            </div>
            <div class="form-row" >                
                <div class="form-group col-md-12">
                    <label for="descricao">Descrição</label>
                    <input type="descricao" class="form-control" name="descricao" id="descricao" placeholder="Descrição" onChange={executaChange}/>
                </div>
            </div>
                                                                                            
                    
                    <input type="submit" className="btn btn-primary" value="Salvar" />                
                
            </form>
            <Mensagem status={status} error={error}/>
            <br></br>
                <input type="button" className="btn btn-info" value="Novo Cadastro" onClick={executaNovoCadastroClick}/>
                <Link to="/selecionar"><input type="button" className="btn btn-success" value="Selecionar"/></Link>                                         
        </div>        
    )
}
 
export default FormIncluir;