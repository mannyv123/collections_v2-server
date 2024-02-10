import express from "express";
import cors from "cors";
import { envConfig } from "./lib/envConfig";

// Config
const PORT = envConfig.PORT || 5001;
const app = express();
app.use(express.json());
app.use(cors());

// Routes

// Server start
app.listen(PORT, () => {
   console.log(`Express server listening on port: ${PORT}`);
});
