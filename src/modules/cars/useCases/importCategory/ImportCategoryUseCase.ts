import { parse } from "csv-parse";
import fs from "fs";
import { categoriesRoutes } from "../../../../routes/categories.routes";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IimportCategory {
  name: string;
  description: string;
}
class ImportCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) { }

  loadCategories(file: Express.Multer.File): Promise<IimportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IimportCategory[] = [];
      const stream = fs.createReadStream(file.path);
      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  };
  async excute(file: Express.Multer.File): Promise<void> {
    const cetegories = await this.loadCategories(file);

    cetegories.map(async (category) => {
      const { name, description } = category;

      const existsCategory = this.categoryRepository.findByName(name)

      if (!existsCategory) {
        this.categoryRepository.create({ name, description })
      }
    });
  };
};

export { ImportCategoryUseCase };
