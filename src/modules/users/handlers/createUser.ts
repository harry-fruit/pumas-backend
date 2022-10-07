import { UserEntity } from "../../../database/entities/User.entity"

export type CreateUser = {
      FirstName: string,
      LastName: string,
      Login: string,
      Email: string
      Password: string,
      ConfirmPassword: string,
    //   Birthdate?: string,
      Gender?: string,
      Phone: string,
    //   Cpf: string,
    //   Cep: string,
    //   Address: string
    //   Number: number,
    //   Complement?: string,
    //   CountryName: string,
    //   StateName: string,
}

export const createUser = async (userPayload:CreateUser) => {
    try {
        const add = {
            Birthdate: Date.now(),
            Cpf: '00000000012',
            Cep: '00000-000',
            Address: 'Teste',
            Number: 123,
            CountryName: 'teste',
            StateName: 'teste'
        }
        const payload = { ...userPayload, ...add};
        
        const user = UserEntity.create({...payload, CreatedAt:Date.now()})

        return user;
    } catch (e) {
        console.log(e)
    }
}