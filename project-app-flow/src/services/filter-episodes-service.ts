import { PodcastTransferModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
    podcastName: string | undefined
): Promise<PodcastTransferModel> => {

let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
};

    const querystring = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(querystring);

    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    }
        
    return responseFormat;
}
