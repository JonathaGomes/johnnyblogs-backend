import { getCustomRepository } from "typeorm";
import { PostsRepositories } from "../repositories/PostsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { instanceToPlain } from "class-transformer";

class ListPostsService {
  async execute() {
    const postsRepositories = getCustomRepository(PostsRepositories);
    const usersRepositories = getCustomRepository(UsersRepositories);

    const posts = await postsRepositories.find();
    const users = await usersRepositories.find();

    const postsFormatted = posts.map((post) => {
      const user = users.find((user) => user.id === post.author);

      return {
        ...instanceToPlain(post),
        author: user.name,
      };
    });

    return instanceToPlain(postsFormatted);
  }
}

export { ListPostsService };
