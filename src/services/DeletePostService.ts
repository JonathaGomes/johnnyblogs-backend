import { getCustomRepository } from "typeorm";
import { PostsRepositories } from "../repositories/PostsRepositories";

interface IComplimentRequest {
  post_id: string;
}

class DeletePostService {
  async execute({ post_id }: IComplimentRequest) {
    const postsRepositories = getCustomRepository(PostsRepositories);

    const post = await postsRepositories.findOne(post_id);

    if (!post) {
      throw new Error("Post not found");
    }

    await postsRepositories.remove(post);

    return;
  }
}

export { DeletePostService };
