import { Router } from "express";
import User from "../models/user";

export class UsersController {
  private router: Router;

  constructor() {
    this.router = Router();

    this.initializeRoutes();
  }

  public getRouter() {
    return this.router;
  }

  private initializeRoutes() {
    this.router.get("/users", async (req, res) => {
      const users = await User.find();
      return res.status(200).json(users);
    });

    this.router.post("/users", async (req, res) => {
      const { name } = req.body;
      const user = new User({ name });
      await user.save();
      return res.status(200).json({ message: "User created" });
    });
  }
}
