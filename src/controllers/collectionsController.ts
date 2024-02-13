import { Request, RequestHandler, Response } from "express";
import { getAllCollections, getCollection } from "../lib/db/dbQueries";

// get all collections
export const getCollections = (async (_req: Request, res: Response) => {
   try {
      const result = await getAllCollections();
      res.status(200).send(result);
   } catch (error) {
      res.status(500).send(error);
   }
}) as RequestHandler;

// get a single collection
export const getSingleCollection = (async (req: Request, res: Response) => {
   const { collectionId } = req.params;

   if (!collectionId) {
      res.status(400).send("No collection ID provided");
   }

   try {
      const result = await getCollection(collectionId);

      if (result.length === 0) {
         return res.status(404).send("Collection not found");
      }

      res.status(200).send(result[0]);
   } catch (error) {
      res.status(500).send(error);
   }
}) as RequestHandler;
