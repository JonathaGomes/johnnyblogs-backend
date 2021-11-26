import { Request, Response } from "express";
import { CreatePostService } from "../services/CreatePostService";

class CreateComplimenteController {
  async handle(request: Request, response: Response) {
    const { title, content, tags, author } = request.body;
    const { user_id } = request;

    const createPostService = new CreatePostService();

    const post = await createPostService.execute({
      title,
      content,
      tags,
      author: user_id,
    });

    return response.json(post);
  }
}

export { CreateComplimenteController };
