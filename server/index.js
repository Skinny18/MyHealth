const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "us-cdbr-east-05.cleardb.net",
    user:"b2683b76d17ebb",
    password:"759e9aeb",
    database:"heroku_562c36c31babfd5",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res)=>{
    const {name_form} = req.body;
    const {email_form} = req.body;
    const {tel_form} = req.body;
    const {telcon_form} = req.body;
    const {end_form} = req.body;
    const {cep_form} = req.body;
    const {bairro_form} = req.body;
    const {cid_form} = req.body;
    const {est_form} = req.body;
    const {cidnas_form} = req.body;
    
    let SQL = "INSERT INTO form (name_form, email_form, tel_form, telcon_form, end_form, cep_form, bairro_form, cid_form, est_form, cidnas_form) VALUES (?,?,?,?,?,?,?,?,?,?)";
    db.query(SQL, [name_form, email_form, tel_form, telcon_form, end_form, cep_form, bairro_form, cid_form, est_form, cidnas_form],(err, result)=>{
        console.log(err)
    });
});

app.get("/perfil", (req, res)=>{
    let SQL = "SELECT * FROM form";
    db.query(SQL, (err, result)=>{
        if(err)console.log(err);
        else res.send(result);
    });
});

app.listen(3306, () => {
    console.log("rodando servidor");
});