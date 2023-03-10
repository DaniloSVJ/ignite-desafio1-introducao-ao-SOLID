import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const usersAlreadyExists = this.usersRepository.findByEmail(email);

    if (usersAlreadyExists) {
      throw new Error("User already exists");
    }
    // const user = this.usersRepository.create({ email, name });

    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
