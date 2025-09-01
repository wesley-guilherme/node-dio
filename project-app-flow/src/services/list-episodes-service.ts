import { repositoryPodcast } from "../repositories/podcasts-repository";

export const serviceListEpisodes = async () => {
    const data = await repositoryPodcast();

     return data;
};

//parei em 1 14 criando o service 