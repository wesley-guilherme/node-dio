import * as http from "http";

import { getListEpisodes } from "./controllers/podscasts-controller"

//aqui está criando o procedimento de requisição do client e resposta do servidor
const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
        if (req.method === "GET") {
           await getListEpisodes(req, res);
        }
    }
);

//aqui está criando a porta onde vai acontecer o processo de requisição / resposta
const port = process.env.PORT;

server.listen(port, () => {
    console.log(`servidor iniciado na porta ${port}`)
})

