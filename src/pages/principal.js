import React from 'react' 
import { Switch,  Route, Link, Routes } from 'react-router-dom';
import myhealth from './imagens/myhealth.png'
import hlogo from './imagens/hlogo.png'



function Princ() {
  return (
    <>
          <div id="geral">
		<div id="cabecalho"> 
			<div id='imagem'><img align="left" height="92" src={hlogo}/></div>
			<div id='titulo'><Link to='/'><h1 id="h111" >My<span id="red">Health</span></h1></Link></div>
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

					<img id="img1" height="89" src={myhealth}/>

					<details>
					<summary id="h111">Quem Somos?</summary>

					<p id="p2">
					Somos da equipe SosTech formado por universitarios do Centro Universitatio fametro. No nosso estudo analisamos o processo de verificação de dados pessoais relacionados à saúde da vítima de acidente de trânsito, através de uma aplicação web que tem seu enfoque em dados como: tipo sanguíneo, alergias, doenças crônicas, uso de remédios controlados, dentre outros. Tendo como objetivo agilidade e diminuição no tempo de resposta para obtenção de dados cruciais para o atendimento de pessoas que venham a passar por um trauma. 


					</p>

				</details>

				<details>

					<summary id="h111">Porque voce deve usar o MyHealth?</summary>

					<p id="p2">
						
					Constatou-se através de pesquisas e comparações de dados que o website My Health pode vir a ser uma ferramenta a otimizar a obtenção de dados cruciais quando trata-se de vítimas de acidentes de trânsito, visto que seu intuito tende a ser uma etiqueta móvel que facilitará e agilizará o primeiro atendimento em casos de acidentes de trânsito, deixando ciente o socorrista de observações importantes relacionadas a saúde do mesmo. 
					</p>

				</details>

				<details>
					<summary id="h111">Usabilidade no dia-a-dia</summary>

					<p id="p2">
					Na nossa aplicacao haverá um formulário com perguntas sobre a saúde do paciente que deverá ser respondido pelo usuário após a criação de um perfil no Website, caso haja alguma mudança no estado de saúde o questionário poderá ser modificado e atualizado. É recomendado atualizar as informações a cada 6 meses. A implementação do software My Health tem como objetivo a diminuição no tempo de resposta para obtenção de dados de vítimas de acidentes de trânsito.
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
