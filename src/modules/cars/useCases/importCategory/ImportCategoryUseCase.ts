class ImportCategoryUseCase {
  excute(file: Express.Multer.File): void {
    console.log(file);
  }
}

export { ImportCategoryUseCase };
