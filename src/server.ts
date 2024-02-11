import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

// Config
dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express();
app.use(express.json());
app.use(cors());

// Routes

// Server start
app.listen(PORT, () => {
   console.log(`Express server listening on port: ${PORT}`);
});
