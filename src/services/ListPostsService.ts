import { getCustomRepository } from "typeorm";
import { PostsRepositories } from "../repositories/PostsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";

class ListPostsService {
  async execute() {
    const postsRepositories = getCustomRepository(PostsRepositories);
    const usersRepositories = getCustomRepository(UsersRepositories);

    const posts = await postsRepositories.find();

    const postsFormatted = posts.map(async (post) => {
      const user = await usersRepositories.findOne({
        id: post.author,
      });

      const newPost = {
        ...classToPlain(post),
        author: user.name,
      };

      return newPost;
    });

    return classToPlain(posts);
  }
}

export { ListPostsService };
