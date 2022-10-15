import { UserEntity } from "../../../database/entities/User.entity"
import { CreateUser } from "../types/CreateUser.type";

export const createUser = async (userPayload: CreateUser) => {
    try {
        userPayload.CreatedAt = new Date();
        const user = UserEntity.create({ ...userPayload })

        return user;
    } catch (e) {
        console.log(e)
    }
}