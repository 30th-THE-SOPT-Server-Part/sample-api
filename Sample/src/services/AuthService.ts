import { getCustomRepository, getManager } from "typeorm"
import { provideSingleton } from "../config/provideSingleton";
import { UserCreateDto } from "../interfaces/auth/UserCreateDto";
import { UserRepository } from "../repository/UserRepository";
import { generateError } from "../utils/error";

@provideSingleton(AuthService)
export class AuthService {
    public async createUser(userCreateDto: UserCreateDto) {
        const userRepository = getCustomRepository(UserRepository);

        try {
            const existCheckUser = await userRepository.findOne({
                email: userCreateDto.email
            });

            console.log(existCheckUser)
            if (existCheckUser) throw generateError('Duplicate', 'Exist User');

            const newUser = userRepository.create(userCreateDto);

            await userRepository.save(newUser);

            const data = {
                id: newUser.id
            };

            return data;
        } catch (e) {
            throw e;
        }
    }
}