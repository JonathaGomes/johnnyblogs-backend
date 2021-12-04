import { Request, Response } from "express";
import { DeletePostService } from "../services/DeletePostService";

class DeletePostController {
  async handle(request: Request, response: Response) {
    const { id: post_id } = request.params;

    const deletePostService = new DeletePostService();

    await deletePostService.execute({
      post_id,
    });

    return response.status(204).json("Post deleted");
  }
}

export { DeletePostController };
