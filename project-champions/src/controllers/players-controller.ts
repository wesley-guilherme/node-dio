import { ok } from '../utils/http-helper';
import { getPlayerService } from './../services/players-service';
import { Request, Response } from "express";

export const getPlayer = async (req: Request, res: Response) => {
    const data = await getPlayerService();
    const response = await ok(data);

    res.status(response.statusCode).json(response.body);
};