import { getCustomRepository } from "typeorm";
import { PostsRepositories } from "../repositories/PostsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentResquest {
  title: string;
  content: string;
  tags: string[];
  author: string;
}

class CreatePostService {
  async execute({ title, content, tags, author }: IComplimentResquest) {
    const postsRepositories = getCustomRepository(PostsRepositories);
    const usersRepositories = getCustomRepository(UsersRepositories);

    const userAuthorExists = await usersRepositories.findOne(author);

    if (!userAuthorExists) {
      throw new Error("User does not exists!");
    }

    const post = postsRepositories.create({
      author: userAuthorExists,
      title,
      content,
      tags,
    });

    await postsRepositories.save(post);

    return post;
  }
}

export { CreatePostService };
