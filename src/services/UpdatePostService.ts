import { response } from "express";
import { getCustomRepository } from "typeorm";
import { PostsRepositories } from "../repositories/PostsRepositories";

interface IComplimentRequest {
  post_id: string;
  title: string;
  content: string;
  tags: string[];
}

class UpdatePostService {
  async execute({ post_id, title, content, tags }: IComplimentRequest) {
    const postsRepositories = getCustomRepository(PostsRepositories);

    const post = await postsRepositories.findOne(post_id);

    if (!post) {
      throw new Error("Post not found");
    }

    const updatedPost = {
      ...post,
      title,
      content,
      tags,
      updated_at: new Date(),
    };

    await postsRepositories.save(updatedPost);

    return updatedPost;
  }
}

export { UpdatePostService };
