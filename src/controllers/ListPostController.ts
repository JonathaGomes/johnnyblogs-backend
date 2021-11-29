import { Request, Response } from "express";
import { ListPostsService } from "../services/ListPostsService";

class ListPostsController {
  async handle(request: Request, response: Response) {
    const { tags } = request.query;

    const listPostsService = new ListPostsService();

    const posts = await listPostsService.execute();

    const postsFormated = posts.map((post) => {
      return {
        ...post,
        tags: post.tags.split(","),
      };
    });

    const postsFiltered = tags
      ? postsFormated.filter((post) => {
          if (Array.isArray(tags)) {
            return tags.map((tag) => {
              return post.tags.includes(tag);
            });
          } else {
            return post.tags.includes(tags);
          }
        })
      : postsFormated;

    return response.json(postsFiltered);
  }
}

export { ListPostsController };
