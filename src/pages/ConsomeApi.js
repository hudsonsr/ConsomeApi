import React, {  Component } from 'react';

import './ConsomeApi.css';

import apiGlobo from '../services/apiGlobo';
import apiTvRioSul from '../services/apiTvRioSul';
import socket from 'socket.io-client';


export default class ConsomeApi extends Component {
    state ={
        urlapi:'',
        pagesize: '',
        pagenumber:''
    };

    async componentDidMount(){
        this.inscreverSocket();
    }
    
    inscreverSocket(){
       try{
        const box = 'Api';
        const io= socket.connect('http://localhost:3333');
        io.emit( box, 'connectionRoom');
        console.log('passou');
        io.on('Api', msg =>{
            console.log(msg);
        });
       }catch(err){
           console.log(err);
       }

        
    }
    textoUrlAlterado = (e) => {
        this.setState({ urlapi : e.target.value });
    }
    textoPageSizeAlterado = (e) => {
        this.setState({ pagesize : e.target.value });
    }
    textoPageNumberAlterado = (e) => {
        this.setState({ pagenumber : e.target.value });
    }
    
    submitDisparado = async(e) =>{
        e.preventDefault()
        
        const response = await apiGlobo.get(`/${this.state.urlapi}/?pagesize=${this.state.pagesize}&pagenumber=${this.state.pagenumber}`);
        const request = await apiTvRioSul.post(`/saveManyCliente`,
            response.data.data
        );

        console.log(request.data);
        //history.push('/');
    }
    render(){
    return(
        <div className="req-container">
            <form onSubmit={this.submitDisparado}>
                <input
                    placeholder="url da api"
                    value={this.state.urlapi}
                    onChange={this.textoUrlAlterado}
                />
                <input
                    placeholder="Qtd Registros por página"
                    value={this.state.pagesize}
                    onChange={this.textoPageSizeAlterado}
                />
                <input
                    placeholder="pagina"
                    value={this.state.pagenumber}
                    onChange={this.textoPageNumberAlterado}
                />   
               <button type="submit">Enviar</button>
            </form>
          
        </div>
    );
}
}