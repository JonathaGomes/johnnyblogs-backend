import "reflect-metadata";
import express from "express";
import cors from "cors";
import "express-async-errors";
import { router } from "./routes";

import "./database";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

export { app };
