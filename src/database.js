import { connect } from "mongoose";
import { MONGODB_CLUSTER } from "./config";

(async () => {
  try {
    const db = await connect(MONGODB_CLUSTER);
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
