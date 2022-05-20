
import React, { useState, useEffect} from 'react';
import final from './imagens/final.png'
import hlogo from './imagens/hlogo.png'


function Perfil() {
    
  return (
      
    <>
    
            <div id="geral">
            <div id="cabecalho">
                <img align="left" height="89" src={hlogo }/>
                <Link to='/principal'><h1 id="h111">My<span id="red">Health</span></h1></Link>
            </div>
            <p></p>
            <div id="principal">
                <div id="conteudo-1"></div>
                <div id="conteudo-2">
                    <div id="conteudo-2-1">
                         <img id="img1"  height="89" src={final}/>   
                         <h1>-Seus Dados-</h1>
                         <details>
                             <summary id="h111" >Dados</summary>
                             <h2>Nome Completo:</h2>
                             <p id='p2'>João Victor da Silva</p>
                             <h2>Data de Nascimento:</h2>
                             <p id="p2">25/08/1997</p>
                             <h2>Email:</h2>
                             <p id="p2">jv123dasilva@gmail.com</p>
                             <h2>Telefone/Celular:</h2>
                             <p id="p2">(92) 99293-7489</p>
                             <h2>Contato de Emergencia:</h2>
                             <p id="p2">(92) 99137-5674</p>
                             <p id="p2">Grau de Parentesco(Pai/Mãe)</p>
                             <h2>Endereco:</h2>
                             <p id='p2'>Rua Padre Caleri</p>
                             <h2></h2>
                             <p id='p2'></p>


                         </details>
                         
                    </div>
                    <div id="conteudo-2-2-2"></div>
                </div>
            </div>
            <div id="rodape"></div>
        </div>
    </>

  );
}

export default Perfil;