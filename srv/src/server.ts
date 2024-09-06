import express from "express";
import { HealthCheckController } from "./routes/HealthCheck";

const app = express();
const healthCheckController = new HealthCheckController();

app.use(express.json());
app.use(healthCheckController.getRouter());

export default app;
