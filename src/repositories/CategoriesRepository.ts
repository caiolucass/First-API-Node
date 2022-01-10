import { Category} from '../model/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from './ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository{
    private categories: Category[];

    constructor(){
        this.categories = [];
    }

    //cria categorias
    create({name, description}:ICreateCategoryDTO): void{
        const category: Category = new Category();
        Object.assign(category, {
            name,
            description,
            created_at: new Date().toLocaleString(),
        });
     
       this.categories.push(category);
     }
    
     //lista categorias
     list(): Category[]{
         return this.categories;
     }

     findByName(name: String): Category{
         const category = this.categories.find(category => category.name === name);
         return category;
     }
}

export {CategoriesRepository};