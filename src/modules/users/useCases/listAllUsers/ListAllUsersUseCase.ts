import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (user) {
      if (!user.admin) {
        throw new Error("You don't is a admin");
      }
      return this.usersRepository.list();
    }
    throw new Error("This user is not authorized");
  }
}

export { ListAllUsersUseCase };
