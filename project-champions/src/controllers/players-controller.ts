import { ok } from '../utils/http-helper';
import { getPlayerService } from './../services/players-service';
import { Request, Response } from "express";

export const getPlayer = async (req: Request, res: Response) => {
    const HttpResponse = await getPlayerService();

    res.status(HttpResponse.statusCode).json(HttpResponse.body); 
};