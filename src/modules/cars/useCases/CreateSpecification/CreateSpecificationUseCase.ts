import { ISpecificatiosRepository } from "../../repositories/ISpecificatiosRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private specificationRepository: ISpecificatiosRepository) { }

  execute({ name, description }: IRequest): void {
    const specificationExists = this.specificationRepository.findByName(name);
    if (specificationExists) {
      throw new Error("Specification already exists");
    }
    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
