import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

const port = process.env.PORT;
const app = express();

app.use(cors());
connectDB();

app.listen(port, () => {
  console.log("listening on port", port);
});
