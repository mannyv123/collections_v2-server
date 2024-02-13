import { Request, RequestHandler, Response } from "express";
import { getAllCollections } from "../lib/db/dbQueries";

export const getCollections = (async (_req: Request, res: Response) => {
   try {
      const result = await getAllCollections();
      res.status(200).send(result);
   } catch (error) {
      res.status(500).send(error);
   }
}) as RequestHandler;
