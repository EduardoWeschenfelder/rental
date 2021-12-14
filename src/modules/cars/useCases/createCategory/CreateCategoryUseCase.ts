import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {

  }

  excute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoryRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error('Catergory already exists!');
    }

    this.categoryRepository.create({ name, description })
  }

}

export { CreateCategoryUseCase }