import "reflect-metadata";
import "./config/env"
import './config/keys';
import express from 'express';
import { RegisterRoutes } from "./routes/routes";

const app = express();

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: false }));

try {
    RegisterRoutes(app);
} catch (e) {
    express.request.next?.(e);
}

export = app;
