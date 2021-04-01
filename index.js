// servidor e rotas
const express = require('express');
const { read } = require('fs');
const { restart } = require('nodemon');
const { atualizarBanco } = require('./petshop');
const petshop = require('./petshop');


const app = express();
app.use(express.json());
app.get('/pets', (req,res)=> {
    return res.send(petshop.listarPets())
})

app.post('/pets', (req,res)=> {
    const { nome, tipo, idade, raca, peso, tutor, contato, vacinado, servicos} = req.body
    const novoPet = { 
            nome, 
            tipo,
            idade, 
            raca, 
            peso, 
            tutor, 
            contato,
            vacinado, 
            servicos
        };
        petshop.adicionarPet(novoPet);
        return res.json(novoPet);
        
})


app.listen(3000, () => {
    console.log('Servidor rodando!');
});

//console.log(petshop.listarPets());
