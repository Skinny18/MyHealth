import React, { useState, useEffect} from 'react' 
import { Switch,  Route, Link, Routes } from 'react-router-dom';
import hlogo from './imagens/hlogo.png'
import Axios from "axios";
import Perfil from './perfil';

function Form() {
	const [ values, setValues] = useState ();
	console.log(values);
	const handleChangeValues = (value) => {
		setValues((prevValue)=> ({
			...prevValue,
			[value.target.name]: value.target.value,
		}));
	};
	const[listForm, setListForm] = useState()
	;
	const handleClickButton = () =>{
		Axios.post("http://localhost:3306/register",
		{
			name_form: values.name_form,
			email_form: values.email_form,
			tel_form: values.tel_form,
			telcon_form: values.telcon_form,
			end_form: values.end_form,
			cep_form: values.cep_form,
			bairro_form: values.bairro_form,
			cid_form: values.cid_form,
			est_form: values.est_form,
			cidnas_form: values.cidnas_form,
		}).then((response)=>{
			console.log(response)
		}

		);
	};

	const handleClickCheck = () =>{
		console.log(values);
	};

	useEffect(()=>{
		Axios.get("https://localhost:3306/perfil").then((response) => {
			setListForm(response.data);
		});
	},[])
  return (
    <>
       <div id="geral">
    <div id="cabecalho">
    	<img align="left" height="89" src={hlogo} />
    	<h1 id="h111" >My<span id="red">Health</span></h1>
    </div>
    <div id="principal">
        <div id="conteudo-1">
        	<p>
        		
        	</p>
        </div>
        <div id="conteudo-2">
            <div id="conteudo-2-1">
            	<h1>Formulario</h1>

            <p><label for="name_form">Nome Completo</label></p>
            <input id="name" type="name" name="name_form" onChange={handleChangeValues}/>

            <p><label for="ida_form">Data de Nascimento</label></p>
            <input id="name" type="date" name="ida_form"/>

            <p><label for="email_form">Email</label></p>
            <input id="name" type="email" name="email_form" onChange={handleChangeValues} />

            <p><label for="tel_form">Telefone/Celular</label></p>
            <input id="name" type="tel" name="tel_form" onChange={handleChangeValues}/>

            <p><label for="tel">Contato de emergencia</label></p>
            <input id="name" type="tel" name="telcon_form" onChange={handleChangeValues}/>

            <p><label for="end">Grau de parentesco</label></p>
             <form method="post">
            	<select name="paren">

            		<option value="pai">Pai/Mae</option>
            		<option value="irm">Irmao/Irma</option>
            		<option value="tia">Tio/Tia</option>
            		<option value="prim">Primo/Prima</option>
            		<option value="o">Outros</option>
            		


            		
            	</select>
            	

            </form>


            <p><label id="check" for="end_form">Endereco</label></p>
            <input id="name" type="name" name="end_form" onChange={handleChangeValues}/>

            <p><label  for="cep_form ">CEP</label></p>
            <input id="name" type="text" name="cep_form" onChange={handleChangeValues}/>

            <p><label for="bairro_form">Bairro</label></p>
            <input id="name" type="text" name="bairro_form" onChange={handleChangeValues}/>

            <p><label for="tel_form">Cidade</label></p>
            <input id="name" type="tel" name="cid_form" onChange={handleChangeValues}/>

            <p><label for="est_form">Estado</label></p>
            <input id="name" type="tel" name="est_form" onChange={handleChangeValues}/>

            <p><label for="cidnas_form">Cidade de Nascimento</label></p>
            <input id="name" type="name" name="cidnas_form" onChange={handleChangeValues}/>

            <p><label>Tipo sanguineo</label> </p>
            <form method="post">
            	<select name="sang">

            		<option value="a+">A+</option>
            		<option value="a-">A-</option>
            		<option value="b+">B+</option>
            		<option value="b-">B-</option>
            		<option value="ab+">AB+</option>
            		<option value="ab-">AB-</option>
            		<option value="o+">O+</option>
            		<option value="o-">O-</option>


            		
            	</select>
            	

            </form>

            <p></p>

            <fieldset>
			    <legend >Possui algum tipo de alergia? Se sim qual?:</legend>

			    <div>
			      <input type="checkbox" id="scales" name="sim"
			             onClick={handleClickCheck}/>
			      <label for="sim">Sim</label>
			    </div>

			    <div>
			      <input type="checkbox" id="horns" name="nao" onClick={handleClickCheck}/>
			      <label for="nao">Nao</label>
			      <p><label for="text">Descreva</label></p>
            		<input id="name" type="text" name="text" onChange={handleChangeValues}/>

			    </div>
			</fieldset>

			<p></p>

      <fieldset>
			    <legend >Utiliza algum tipo de medicamento? Se sim qual?:</legend>

			    <div>
			      <input type="checkbox" id="scales" name="sim"
			             />
			      <label for="sim">Sim</label>
			    </div>

			    <div>
			      <input type="checkbox" id="horns" name="nao"/>
			      <label for="nao">Nao</label>
			      <p><label for="text">Descreva</label></p>
            		<input id="name" type="text" name="text"/>

			    </div>
			</fieldset>

			<p></p>

			<fieldset>
			    <legend >Fez alguma cirurgia? Se sim descreva:</legend>

			    <div>
			      <input type="checkbox" id="scales" name="sim"
			             />
			      <label for="sim">Sim</label>
			    </div>

			    <div>
			      <input type="checkbox" id="horns" name="nao"/>
			      <label for="nao">Nao</label>
			      <p><label for="text">Descreva</label></p>
            		<input id="name" type="text" name="text"/>

			    </div>
			</fieldset>

			<p></p>

			
			<fieldset>
			    <legend >Possui diabetes? Se sim, qual tipo?</legend>

			    <div>
			      <input type="checkbox" id="scales" name="sim"
			             />
			      <label for="sim">Sim</label>
			    </div>

			    <div>
			      <input type="checkbox" id="horns" name="nao"/>
			      <label for="nao">Nao</label>
			      <p></p>
			      
			      <form method="post">
            	<select name="dia">

            		<option value="1">Diabetes tipo 1</option>
            		<option value="2">Diabetes tipo 2</option>
            		


            		
            	</select>
            	

            </form>

			    </div>
			</fieldset>

			<p></p>


			<fieldset>
			    <legend >É portador de IST(Infeccoes sexualmente transmissiveis?:</legend>

			    <div>
			      <input type="checkbox" id="scales" name="sim"
			             />
			      <label for="sim">Sim</label>
			    </div>

			    <div>
			      <input type="checkbox" id="horns" name="nao"/>
			      <label for="nao">Nao</label>
			      <p><label for="text">Descreva</label></p>
            		<input id="name" type="text" name="text"/>

			    </div>
			</fieldset>

			<p></p>

			<fieldset>
			    <legend >Historico familiar de doencas? Se sim quaL?:</legend>

			    <div>
			      <input type="checkbox" id="scales" name="sim"
			             />
			      <label for="sim">Sim</label>
			    </div>

			    <div>
			      <input type="checkbox" id="horns" name="nao"/>
			      <label for="nao">Nao</label>
			      <p><label for="text">Descreva</label></p>
            		<input id="name" type="text" name="text"/>

			    </div>

				
			</fieldset>
				<Link to="./perfil">
					<p><input type="submit" value="Avancar" onClick={() => handleClickButton()}/></p>
				
				</Link>


           
            </div>
            <div id="conteudo-2-2-2">
            	<p></p>
            </div>
        </div>
        <p></p>
    </div>
    <div id="rodape"></div>
</div>
    </>

  );
}

export default Form;


