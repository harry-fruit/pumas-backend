import { UserEntity } from "../../../database/entities/User.entity"

export type CreateUser = {
      FirstName: string,
      LastName: string,
      Login: string,
      Email: string
      Password: string,
      Birthdate: string,
      Gender?: string,
      Phone: string,
      Cpf: string,
      Cep: string,
      Address: string
      Number: number,
      Complement?: string,
      CountryName: string,
      StateName: string,
}

export const createUser = async (userPayload:CreateUser) => {
    try {
        const user = UserEntity.create({...userPayload, CreatedAt:Date.now()})

        return user;
    } catch (e) {
        console.log(e)
    }
}