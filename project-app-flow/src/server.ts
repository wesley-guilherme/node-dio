import * as http from "http";

import { getFilterEpisodes, getListEpisodes } from "./controllers/podscasts-controller"
import { Routes } from "./routes/routes";

//aqui está criando o procedimento de requisição do client e resposta do servidor
const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
        //querystring
        //http://localhost:3636/api/episodes?p=flow
        const [baseUrl, querystring] = req.url?.split("?") ?? ["" , ""]; 

        if (req.method === "GET" && baseUrl === Routes.LIST) {
           await getListEpisodes(req, res);
        }

        if (req.method === "GET" && baseUrl === Routes.EPISODES) {
            await getFilterEpisodes(req, res);
        }
    }
);

//aqui está criando a porta onde vai acontecer o processo de requisição / resposta
const port = process.env.PORT;

server.listen(port, () => {
    console.log(`servidor iniciado na porta ${port}`)
})

