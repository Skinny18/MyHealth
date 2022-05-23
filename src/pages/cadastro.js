import React from 'react'; 
import  './estilo.css';
import hlogo from './imagens/hlogo.png'
import { Switch,  Route, Link, Routes } from 'react-router-dom';

function Cad() {
  return (
    <>
          <div id="geral">
          <div id="cabecalho"> 
			      <div id='imagem'><img align="left" height="92" src={hlogo}/></div>
			      <div id='titulo'><Link to='/'><h1 id="h111" >My<span id="red">Health</span></h1></Link></div>
		      </div>
          <div id="principal">
              <div id="conteudo-1">
                  <p>
                      
                  </p>
              </div>
              <div id="conteudo-2">
                  <div id="conteudo-2-1">
                      <h1>Cadastro</h1>

                    <p><label for="name">Nome</label></p>
                    <input id="name" type="name" name="name"/>
                    <p><label for="email">Email</label></p>
                    <input id="name" type="email" name="email"/>
                    <p><label for="cone">Confirme o email</label></p> 
                    <input id="name" type="email" name="cone"/>
                    <p><label for="pass">Senha</label></p>
                    <input id="name" type="password" name="pass"/>
                    <p><label for="passcon">Confirme a senha</label></p>
                    <input id="name" type="password" name="passcon"/> 

                    <p><label  for="tel">Telefone/Celular</label></p>
                    <input id="name" type="tel" name="tel"/>

                    <p></p>

                    <fieldset>
                      <legend ></legend>

                      <div>
                        <input id="" type="checkbox" name="term"/>
                        <label for="term">Aceito todos Termos de Uso</label>
                      </div>

                      
                  </fieldset>


                      <Link to='/'>
                          <p><input type="submit" value="Cadastrar"/></p>
                      </Link>   


                  </div>
                  <div id="conteudo-2-2-2"></div>
              </div>
              <p></p>
          </div>
          <div id="rodape"></div>
      </div>
    </>

  );
};

export default Cad;