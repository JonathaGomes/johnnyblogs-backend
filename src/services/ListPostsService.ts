import { getCustomRepository } from "typeorm";
import { PostsRepositories } from "../repositories/PostsRepositories";
import { classToPlain } from "class-transformer";

class ListPostsService {
  async execute() {
    const postsRepositories = getCustomRepository(PostsRepositories);

    const tags = await postsRepositories.find();

    return classToPlain(tags);
  }
}

export { ListPostsService };
