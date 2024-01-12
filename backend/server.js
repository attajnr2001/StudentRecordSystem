import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const port = process.env.PORT;
const app = express();

app.use(cors());

app.listen(port, () => {
  console.log("listening on port", port);
});
 