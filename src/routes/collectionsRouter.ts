import express, { Router } from "express";
import { getCollections } from "../controllers/collectionsController";

const router: Router = express.Router();

router.route("/").get(getCollections);

export default router;
