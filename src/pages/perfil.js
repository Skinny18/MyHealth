
import React, { useState, useEffect} from 'react';
import final from './imagens/final.png'
import hlogo from './imagens/hlogo.png'


function Perfil() {
    
  return (
      
    <>
    
            <div id="geral">
            <div id="cabecalho">
                <img align="left" height="89" src={hlogo }/>
                <h1 id="h111">My<span id="red">Health</span></h1>
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
                             <p id='p2'>Gabriel Carlos Carvalho Pinto</p>
                             <h2>Data de Nascimento:</h2>
                             <p id="p2">25/03/2003</p>


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