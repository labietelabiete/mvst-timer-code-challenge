import dotenv from "dotenv";

dotenv.config();

const { MONGO_DB_URL, PORT } = process.env;

const CONFIG = {
  app: {
    port: PORT || 4000,
  },
  db: {
    url: MONGO_DB_URL || "",
  },
};

export const config = CONFIG;
