import React from 'react' 
import { Switch,  Route, Link, Routes } from 'react-router-dom';
import frame from './imagens/frame.png'
import hlogo from './imagens/hlogo.png'



function Princ() {
  return (
    <>
          <div id="geral">
		<div id="cabecalho"> 
			<img align="left" height="89" src={hlogo}/>
			<Link to='/'><h1 id="h111" >My<span id="red">Health</span></h1></Link>
		</div>
		<div id="principal">
			<p></p>
			<div id="conteudo1-1">

				<h2 id="h22">Passo a passo</h2>
				
				<ul id="separator">
					<li>Cadastre-se, caso ja tenha se cadastrado, faca login</li>
					
					
					<li>Voce ira ser direcionado para pagina de formulario</li>
					
					<li>Insira seus dados de acordo com que se pede</li>
					
				<h2 id="h22">Leia Atentamente</h2>	
				</ul>

			

			</div>

			<div id="conteudo-2">

				<div  id="conteudo-2-1">

					<img id="img1" height="89" src={frame}/>

					<details>
					<summary id="h111">Quem Somos?</summary>

					<p id="p2">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


					</p>

				</details>

				<details>

					<summary id="h111">Porque voce deve usar o MyHealth?</summary>

					<p id="p2">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


					</p>

				</details>

				<details>
					<summary id="h111">Usabilidade no dia-a-dia</summary>

					<p id="p2">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</details>

				</div>
				<div id="conteudo-2-2">
					<h2 id="cadastro">Login</h2>
					
					<p ><label for="login">-Email-</label></p>
					<input align="center" id="login" type="Email" name="Email"/>

					<p><label for="pass">-Senha-</label></p>
					<input id="pass" type="password" name="pass"/>
				<Link to = '/formulario'>
					<p><input type="submit" value="Login"/></p>
				</Link>

				<Link id="esque" to ='/esqueceu'>Esqueceu a senha?</Link>


				<Link to= '/cadastro'>
					<p><input id="p1" type="submit" value='Cadastrar' /></p>
				</Link>
				</div>
			</div>
		</div>
		<p></p>
		<div id="rodape">
			
		</div>
	</div>
    </>

  );
}

export default Princ;
