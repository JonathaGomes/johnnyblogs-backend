import { Router } from "express";

import { CreateUserController } from "./controllers/CreateUserController";
import { AuthenticateUserController } from "./controllers/AuthenticateController";
import { CreateComplimenteController } from "./controllers/CreatePostController";

import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createComplimenteController = new CreateComplimenteController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/posts", ensureAuthenticated, createComplimenteController.handle);

export { router };
