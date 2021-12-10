import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/service/CreateCategoryService';

const categoriesRoutes = Router()

const categoryRepository = new CategoriesRepository()

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoryRepository)
  createCategoryService.excute({ name, description })
  return res.status(201).send()
})

categoriesRoutes.get("/", (req, res) => {
  const response = categoryRepository.list()

  return res.json(response)
})

export { categoriesRoutes }