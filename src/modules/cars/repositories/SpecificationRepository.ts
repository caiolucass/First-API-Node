import { Specification } from "../model/Specification";
import { ISpecificationRepository, ICreateSpecificationDTO } from "./ISpecificationRepositories";


class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];

    constructor(){
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();
        Object.assign({
            name,
            description,
            create_at: new Date().toLocaleString(),
        });

        this.specifications.push(specification);
    }   

    findByName(name: string): Specification {
        const specification = this.specifications.find(
            specification => specification.name === name);
        return specification;
    }
}

export {SpecificationRepository};