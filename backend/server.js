import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const port = process.env.PORT;
const app = express();

app.use(cors()); 
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/users", userRoute);

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
  console.log("listening on port", port);
});
