import { response } from 'express';
import { Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (request, response) =>{
  const {name, description} = request.body;
  const creatSpecificationService = new CreateSpecificationService(specificationRepository);

  creatSpecificationService.execute({name, description});
  return response.status(201).send().json("Specification criada com sucesso!");
});

export {specificationRoutes};