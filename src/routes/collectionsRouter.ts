import express, { Router } from "express";
import { getCollections, getSingleCollection } from "../controllers/collectionsController";

const router: Router = express.Router();

router.route("/").get(getCollections);
router.route("/:collectionId").get(getSingleCollection);

export default router;
