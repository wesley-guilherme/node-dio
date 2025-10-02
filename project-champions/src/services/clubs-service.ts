import * as HttpResponse from "../utils/http-helper";
import * as repository from "../repositories/clubs-repository"

export const getClubService = async () => {
    const data = [
        {
        id: 1,
        name: "Real Madrid"
        }
    ]

    const response = HttpResponse.ok(data);

    return response;
}