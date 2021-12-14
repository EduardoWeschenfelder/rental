import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoriesUseCase) { }
  handle(req: Request, res: Response): Response {
    const response = this.listCategoryUseCase.excute();

    return res.json(response);
  }
}

export { ListCategoriesController };
