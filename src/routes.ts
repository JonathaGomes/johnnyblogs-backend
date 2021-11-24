import { Router } from "express";
import { verifyJWT } from "@/middlewares";
import jwt from "jsonwebtoken";
const router = Router();

const users = [
  {
    id: 1,
    user: "jonatha@gmail.com",
    password: "123456",
  },
  {
    id: 2,
    user: "paulo@gmail.com",
    password: "654321",
  },
  {
    id: 3,
    user: "ednardo@gmail.com",
    password: "abcdef",
  },
];

const posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the first post",
    author: "Jonatha",
    tags: ["nodejs", "reactjs", "javascript"],
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the second post",
    author: "Jonatha",
    tags: ["nodejs", "reactjs", "javascript"],
  },
  {
    id: 3,
    title: "Third Post",
    content: "This is the third post",
    author: "Jonatha",
    tags: ["nodejs", "api", "javascript"],
  },
];

router.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

router.get("/posts", (req, res) => {
  //const { tag } = req.query;

  //const results = tag ? posts.filter((post) => post.tags.includes(tag)) : posts;

  return res.json(posts);
});

router.post("/login", (req, res) => {
  const { user, pass } = req.body;

  const userExists = users.find((u) => u.user === user);

  if (!userExists) {
    return res.status(401).json({ error: "User not found." });
  }

  if (userExists) {
    const userL = users.find((u) => u.user === user && u.password === pass);

    if (!userL) {
      return res.status(401).json({ error: "Password does not match." });
    }

    const token = jwt.sign({ userId: userExists.id }, process.env.SECRET);
    return res.json({ token });
  }

  return res.status(401).json({ message: "Unauthorized" });
});

router.get("/me", verifyJWT, (req, res) => {
  const { user } = req.body;
  const userLogged = users.find((u) => u.id === user.userId);
  console.log(userLogged);
  return res.json({ message: `Hello ${userLogged?.user}` });
});

export { router };
