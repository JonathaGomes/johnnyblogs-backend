import { Router } from "express";

import { CreateUserController } from "./controllers/CreateUserController";
import { AuthenticateUserController } from "./controllers/AuthenticateController";
import { CreatePostController } from "./controllers/CreatePostController";
import { ListPostsController } from "./controllers/ListPostController";

import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createPostController = new CreatePostController();
const listPostsController = new ListPostsController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/posts", ensureAuthenticated, createPostController.handle);
router.get("/posts", ensureAuthenticated, listPostsController.handle);

export { router };
