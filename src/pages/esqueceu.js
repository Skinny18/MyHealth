import React from 'react' 



function Esque() {
  return (
    <>
       <div id="geral">
    <div id="cabecalho">
    	<img align="left" height="89" src="imagens/frame.png"/>
    	<h1 id="h111">My<span id="red">Health</span></h1>
    </div>
    <p></p>
    <div id="principal">
        <div id="conteudo-1"></div>
        <div id="conteudo-2">
            <div id="conteudo-2-1">
            	 	 <h1>Esqueceu a senha?</h1>

       				<h2>Siga os passos e insira seus dados</h2>

       				<p><label for="email">Email</label></p>
       				<input id="name" type="email" name="email"/>

       				<p><label for="tel">Telefone</label></p>
       				<input id="name" type="text" name="tel"/>

       				<p><label for="pass">Nova senha</label></p>
       				<input id="name" type="password" name="pass"/>

       				<p><label for="pass">Repita a senha</label></p>
       				<input id="name" type="password" name="pass"/>

       				<a href="projeto.html">
                    <p><input type="submit" value="Avancar"/></p>
                </a>    
            </div>
            <div id="conteudo-2-2-2"></div>
        </div>
    </div>
    <div id="rodape"></div>
</div>
    </>

  );
}

export default Esque;
