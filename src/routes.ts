import { Router } from "express";

import { CreateUserController } from "./controllers/CreateUserController";
import { AuthenticateUserController } from "./controllers/AuthenticateController";
import { CreatePostController } from "./controllers/CreatePostController";
import { ListPostsController } from "./controllers/ListPostController";
import { UpdatePostController } from "./controllers/UpdatePostController";
import { DeletePostController } from "./controllers/DeletePostController";

import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createPostController = new CreatePostController();
const listPostsController = new ListPostsController();
const updatePostController = new UpdatePostController();
const deletePostController = new DeletePostController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/posts", ensureAuthenticated, createPostController.handle);
router.get("/posts", ensureAuthenticated, listPostsController.handle);
router.put("/posts/:id", ensureAuthenticated, updatePostController.handle);
router.delete("/posts/:id", ensureAuthenticated, deletePostController.handle);

export { router };
