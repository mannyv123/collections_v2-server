import { Request, RequestHandler, Response } from "express";
import { getImages, getSingleImageFromDb } from "../utils/dbQueries";
import { triggerLambda } from "../utils/awsQueries";
import { ImageWithUrl } from "../lib/types/types";

// Get all images details for map markers
export const getAllImages = (async (_req: Request, res: Response) => {
   try {
      const images = await getImages();
      res.status(200).send(images);
   } catch (error) {
      res.status(500).send(error);
   }
}) as RequestHandler;

// Get single image
export const getSingleImage = (async (req: Request, res: Response) => {
   const { size } = req.query;
   const { imageId } = req.params;

   if (!size || !imageId) {
      return res.status(400).send("Missing parameters in request");
   }

   if (size !== "full") {
      if (size !== "thumbnail") {
         return res.status(400).send("Invalid size parameter. Must be 'full' or 'thumbnail'");
      }
   }

   try {
      const image = await getSingleImageFromDb(imageId);
      const imageUrl = await triggerLambda(image[0].name, size);

      const imageWithUrl: ImageWithUrl = {
         imageUrl,
         ...image[0],
      };

      res.status(200).send(imageWithUrl);
   } catch (error) {
      res.status(500).send(error);
   }
}) as RequestHandler;
