import { IncomingMessage, ServerResponse } from "http";


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(
        JSON.stringify([
{
    podcastName: "flow",
    episode: "Especialista RESPONDE se VALE A PENA estudar PROGRAMAÇÃO",
    videoId:"Q0YYA8hSV8g",
    categories:["tecnologia", "programação"]
},
{
    podcastName: "Musica em 360",
    episode: "Conversa inteligente sobre música e produção | O que grandes músicos enxergam",
    videoId:"4MbM-Eyk2qA",
    categories:["cultura", "música"]
     },
   ])
  );
};