import { updatePlayer } from './../controllers/players-controller';
import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";
import { StatisticsModel } from '../models/statistics-model';

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
        await PlayerRepository.insertPlayer(player);
        response = HttpResponse.created()
    } else {
      response =  HttpResponse.badRequest();
    }

    return response
};

export const deletePlayerService = async (id: number) => {
    let response = null;
    await PlayerRepository.deleteOnePlayer(id);
    response = HttpResponse.ok({ message: "deleted" });
    return response; 
}

export const updatePlayerService = async (
    id: number,
    statistics: StatisticsModel
) => { 

}; 

//parei em update implementando service e repository