import { config } from "dotenv";

config();

export const MONGODB_CLUSTER = process.env.MONGODB_CLUSTER;

export const PORT = process.env.PORT || 3000;
