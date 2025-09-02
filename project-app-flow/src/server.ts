import * as http from "http";
import { app } from "./app";

//aqui está criando o procedimento de requisição do client e resposta do servidor
const server = http.createServer(app);

//aqui está criando a porta onde vai acontecer o processo de requisição / resposta
const port = process.env.PORT;

server.listen(port, () => {
    console.log(`servidor iniciado na porta ${port}`);
})

