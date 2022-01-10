import { Category } from "../model/Category";
import { ICategoriesRepository } from "./ICategoriesRepository";


interface ICreateCategoryDTO {
    name:string,
    description: string;
}

class PostgressCategoriesReposository implements ICategoriesRepository{
    findByName(name: String): Category {
        console.log(name);
        throw new Error("Method not implemented.");
    }
    list(): Category[] {
        console.log(Category);
        throw new Error("Method not implemented.");
    }
    create({name, description}: ICreateCategoryDTO): void {
        console.log(name, description);
        throw new Error("Method not implemented.");
    }
}

export {PostgressCategoriesReposository};