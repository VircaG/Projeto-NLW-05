import express, { request, response } from "express";


const app = express();

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar informação específica
*/

app.get("/", (request, response) => {
    return response.json({
        message: "Olá NLW 05!"
    })
});

app.post("/", (request, response) => {
    return response.json({ message: "Utilizador Salvo com sucesso!" });

});



app.listen(3333, () => console.log("Server is running on port 3333"));