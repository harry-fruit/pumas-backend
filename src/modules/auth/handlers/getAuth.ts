import { UserEntity } from "../../../database/entities/User.entity";

export type AuthLogin = {
    Login: string,
    Password: string
}

export const getAuth =  async ({ Login, Password }:AuthLogin) => {
    try{
        const user = await UserEntity.findOne({ where: { Login, Password }});
        return user;
    } catch (error){
        console.log(error);
    }
};