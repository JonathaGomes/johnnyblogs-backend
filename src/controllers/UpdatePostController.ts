import { Request, Response } from "express";
import { UpdatePostService } from "../services/UpdatePostService";

class UpdatePostController {
  async handle(request: Request, response: Response) {
    const { title, content, tags } = request.body;
    const { id: post_id } = request.params;

    const updatePostService = new UpdatePostService();

    const post = await updatePostService.execute({
      post_id,
      title,
      content,
      tags,
    });

    return response.json(post);
  }
}

export { UpdatePostController };
