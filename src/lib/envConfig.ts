import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
   dotenv.config({ path: ".env.development" });
} else {
   dotenv.config({ path: ".env.production" });
}

export const envConfig = {
   PORT: process.env.PORT,
   database: {
      DB_HOST: process.env.DB_HOST,
      DB_NAME: process.env.DB_NAME,
      DB_USER: process.env.DB_USER,
      DB_PASSWORD: process.env.DB_PASSWORD,
   },
};
