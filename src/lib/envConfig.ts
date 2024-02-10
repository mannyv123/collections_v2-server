import dotenv from "dotenv";

dotenv.config();

export const envConfig = {
   PORT: process.env.PORT,
   database: {
      DB_HOST: process.env.DB_HOST,
      DB_NAME: process.env.DB_NAME,
      DB_USER: process.env.DB_USER,
      DB_PASSWORD: process.env.DB_PASSWORD,
   },
};
