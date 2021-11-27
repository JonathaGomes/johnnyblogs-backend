import { Request, Response } from "express";
import { ListPostsService } from "../services/ListPostsService";

class ListPostsController {
  async handle(request: Request, response: Response) {
    const listPostsService = new ListPostsService();

    let posts = await listPostsService.execute();
    posts = posts.map((post) => {
      return {
        ...post,
        tags: post.tags.split(","),
      };
    });

    console.log(posts);

    return response.json(posts);
  }
}

export { ListPostsController };
