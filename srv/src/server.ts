import express from "express";
import { HealthCheckController } from "./routes/HealthCheck";
import { UsersController } from "./routes/User";

const app = express();
const healthCheckController = new HealthCheckController();
const usersController = new UsersController();

app.use(express.json());
app.use(healthCheckController.getRouter());
app.use(usersController.getRouter());

export default app;
