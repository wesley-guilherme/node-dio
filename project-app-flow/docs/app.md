# Podcast Menager


### Descrição

Um app ao estilo netflix, aonde possa centralizar diferentes podcasts separados por categoria


### Domínio

Podcasts feitos em vídeo


### Features

- Listar os episódios  podcasts em sessões de categorias
    - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como

### Feature:

- Listar os episódios podcasts em sessões de categorias

### Como vou implementar:

GET: retorna lista de episódios

Response: 

```js
[
{
    podcastName: "flow",
    episode: "Especialista RESPONDE se VALE A PENA estudar PROGRAMAÇÃO",
    videoId:"Q0YYA8hSV8g",
    cover: "https://i.ytimg.com/vi/Q0YYA8hSV8g/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=Q0YYA8hSV8g&a"
    categories:["tecnologia", "programação"]
},
{
    podcastName: "Musica em 360",
    episode: "Conversa inteligente sobre música e produção | O que grandes músicos enxergam",
    videoId:"4MbM-Eyk2qA",
    cover: "https://i.ytimg.com/vi/4MbM-Eyk2qA/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4MbM-Eyk2qA",
    categories:["cultura", "música"]
},
]
```
 