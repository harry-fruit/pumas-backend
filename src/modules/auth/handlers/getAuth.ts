import { UserEntity } from "../../../database/entities/User.entity";

export type AuthLogin = {
    Email: string,
    Password: string
}

export const getAuth =  async ({ Email, Password }:AuthLogin) => {
    try{
        const user = await UserEntity.findOne({ where: { Email, Password }});
        return user;
    } catch (error){
        console.log(error);
    }
};