import { Router } from "express";
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository'
import { CreateSpecificationService } from "../modules/cars/service/CreateSpecificationService";

const specificationRoutes = Router()

const specificationsRepository = new SpecificationsRepository()
specificationRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const createSpecificationService = new CreateSpecificationService(specificationsRepository)

  createSpecificationService.excute({ name, description })

  return res.status(201).send()
})

// specificationsRepository.get("/", (req, res) => {
//   const response = specificationsRepository.list()

//   return res.json(response)
// })

export { specificationRoutes }