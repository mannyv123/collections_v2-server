import { Request, RequestHandler, Response } from "express";
import { getImages } from "../utils/dbQueries";

export const getAllImages = (async (_req: Request, res: Response) => {
   try {
      const images = await getImages();
      res.status(200).send(images);
   } catch (error) {
      res.status(500).send(error);
   }
}) as RequestHandler;
