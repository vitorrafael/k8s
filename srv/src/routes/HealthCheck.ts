import { Router } from "express";

export class HealthCheckController {
  private router: Router;

  constructor() {
    this.router = Router();

    this.initializeRoutes();
  }

  public getRouter() {
    return this.router;
  }

  private initializeRoutes() {
    this.router.get("/health", (req, res) => {
      return res.status(200).json({ message: "Server is running." });
    });
  }
}
