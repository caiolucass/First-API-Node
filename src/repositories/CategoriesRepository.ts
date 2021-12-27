import { Category} from '../model/Category';

interface ICreateCategoryDTO{
    name:string,
    description: string;
}

class CategoriesRepository {
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
}

export {CategoriesRepository}