import {response, Router} from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

/*
* Cria uma categoria
*/
categoriesRoutes.post("/", (request, response) => {
  const {name, description} = request.body;
  const createCategoriesService = new CreateCategoryService(categoriesRepository);
 
  createCategoriesService.execute({name, description});
  return response.status(201).send();
});

/*
* Retorna uma categoria de categorias
*/
categoriesRoutes.get("/", (request, response) => {
    const listAll = categoriesRepository.list();
    return response.json(listAll);
});

export {categoriesRoutes};