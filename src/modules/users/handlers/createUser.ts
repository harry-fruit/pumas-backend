import { UserEntity } from "../../../database/entities/User.entity"
import { CreateUser } from "../types/CreateUser.type";
import bcrypt from 'bcrypt';
import { SysTypeEntity } from "../../../database/entities/SysType";

export const createUser = async (userPayload: CreateUser) => {
    try {
        userPayload.CreatedAt = new Date();

        userPayload.Password = await bcrypt.hash(userPayload.Password, 10);
        const userType = (await SysTypeEntity.findOne({ where: { UniqueCode: userPayload.UserType } }) as any).dataValues
        if (userType) {
            delete userPayload.UserType 
            userPayload.IdSysType = userType.Id
            const user = UserEntity.create({ ...userPayload })
            return user;
        } else {
            return false;
        };
        
    } catch (e) {
        console.log(e)
    }
}