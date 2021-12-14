import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  };
  create({ name, description }: ICreateSpecificationDTO): void {
    const spefication = new Specification();

    Object.assign(spefication, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(spefication);
  };

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  };
};

export { SpecificationsRepository };
