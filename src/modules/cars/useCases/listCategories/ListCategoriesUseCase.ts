import { Category } from "../../model/Category"
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"



class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {

  }

  excute(): Category[] {
    const categories = this.categoryRepository.list()

    return categories
  }

}

export { ListCategoriesUseCase }