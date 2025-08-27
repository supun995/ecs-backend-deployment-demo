import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import { json, urlencoded } from "body-parser";
import postsRouter from "./api/ping";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();

app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/api/ping", postsRouter);

// Global error handler
app.use(errorHandler);

export default app;
