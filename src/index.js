import 'dotenv/config'
import {IngressoCinema, frequenciaCaracter, maiorNumero } from "./services.js"

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());


server.get('/dia2/corprimaria/:cor', (req, resp) => {
   let cor = String (req.params.cor);
   let corprimaria = cor == 'vermelho' || cor == 'azul' || cor == 'amarelo';

    resp.send({
        primaria:corprimaria
    });
})

server.post ('/dia2/IngressoCinema', (req, resp) => {
    try {
        const {qtdInteiras, qtdMeias, dia, nacionalidade} = req.body;
        const total = IngressoCinema (qtdInteiras, qtdMeias, dia, nacionalidade);

        resp.send ({
            total: total
        })

    }catch (err) {
        resp.send ({
            erro: err.message
        })
    }
})

    server.get('/dia2/freqcaractere/:texto/:caractere', (req, resp) => {

        try {
            const {texto,caractere } = req.params;
            const freq = frequenciaCaracter(texto, caractere);
            resp.send({
                freq: freq
            });
        
        } catch (err){
             resp.send({
                erro: err.message
        })
        
        }
    })
        server.post('/dia2/maiorNumero', (req,resp) => {
        try{
            const numeros = req.body;
            const maior = maiorNumero(numeros);

            resp.send({
                maior: maior
            });
        
        } catch (err){
            resp.send({
               erro: err.message
       })
    }
})


server.listen(process.env.PORT,
              () => console.log(`API online na porta ${process.env.PORT}`));