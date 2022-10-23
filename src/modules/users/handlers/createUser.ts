import { UserEntity } from "../../../database/entities/User.entity"
import { CreateUser } from "../types/CreateUser.type";
import bcrypt from 'bcrypt';

export const createUser = async (userPayload: CreateUser) => {
    try {
        userPayload.CreatedAt = new Date();

        userPayload.Password = await bcrypt.hash(userPayload.Password, 10);
        const user = UserEntity.create({ ...userPayload })

        return user;
    } catch (e) {
        console.log(e)
    }
}