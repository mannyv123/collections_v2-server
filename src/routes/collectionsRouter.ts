import express, { Router } from "express";
import {
   getCollections,
   getSingleCollection,
   getSingleCollectionImages,
} from "../controllers/collectionsController";

const router: Router = express.Router();

router.route("/").get(getCollections);
router.route("/:collectionId").get(getSingleCollection);
router.route("/:collectionId/images").get(getSingleCollectionImages);

export default router;
