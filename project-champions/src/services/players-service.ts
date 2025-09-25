import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () =>  {
    const data = await PlayerRepository.findAllPlayers();
    let response = null;
    
    if (data) {
        response = HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }

    return response ;
};

export const getPlayerByIdService = async (id:number) => {
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;
    
        if (data) {
        response = HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }

    return response
};

export const createPlayerService = async (player: PlayerModel) => {

    let response = null
    //verifica se o objeto está vazio
    if(Object.keys(player).length !== 0) {
        response = await PlayerRepository.insertPlayer(player);
    } else {
      response =  HttpResponse.badRequest();
    }

    return response
};

//parei aos 16:50 ajustando o cadastro