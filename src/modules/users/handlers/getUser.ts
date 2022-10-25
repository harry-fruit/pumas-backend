import { Model } from "sequelize";
import { DbInstance } from "../../../database/Database";
import { UserEntity } from "../../../database/entities/User.entity";
import { UserInterface } from "../interface/User.interface";

export const getUserByCpf = async (
  Cpf: string
): Promise<Model<Partial<UserInterface>> | null | undefined> => {
  try {
    const user: Promise<Model<Partial<UserInterface>> | null> = UserEntity.findOne({
      where: { Cpf },
      attributes: ["Id", "FirstName", "Email", "Cpf", "Phone"],
    });

    return user;
  } catch (error) {
    console.log(error);
  }
};

export const getUserByEmail = async (
  Email: string
): Promise<Model<Partial<UserInterface>> | null | undefined> => {
  try {
    const user: Promise<Model<Partial<UserInterface>> | null> = UserEntity.findOne({
      where: { Email },
      attributes: ["Id", "FirstName", "Email", "Cpf", "Phone"],
    });

    return user;
  } catch (error) {
    console.log(error);
  }
};

export const getUserByPhone = async (
  Phone: string
): Promise<Model<Partial<UserInterface>> | null | undefined> => {
  try {
    const user: Promise<Model<Partial<UserInterface>> | null> = UserEntity.findOne({
      where: { Phone },
      attributes: ["Id", "FirstName", "Email", "Cpf", "Phone"],
    });

    return user;
  } catch (error) {
    console.log(error);
  }
};

export const getUserByCnpj = async (Cnpj: string) => {
  try {
    const user: Promise<Model<Partial<UserInterface>> | null> = UserEntity.findOne({
      where: { Cnpj },
      attributes: ["Id", "FirstName", "Email", "Cnpj", "Phone"],
    });

    return user;
  } catch (error) {
    console.log(error)
  }
}

export const getUserBySocialReason = async (socialReason: string) => {
  try {
    const sql = 'SELECT * FROM VWUserExtraData WHERE SocialReason = :SocialReason'
    const replacements = {
      SocialReason: socialReason
    }
    const user = await DbInstance.query(sql, { replacements, raw: true })
    
    return user[0] && user[0].length > 0 ? user[0] : null;
  } catch (error) {
    console.log(error)
  }
}

export const getUserByComercialName = async (comercialName: string) => {
  try {
    const sql = 'SELECT * FROM VWUserExtraData WHERE ComercialName = :ComercialName'
    const replacements = {
      ComercialName: comercialName
    }
    const user = await DbInstance.query(sql, { replacements, raw: true })
    
    return user[0] && user[0].length > 0 ? user[0] : null;
  } catch (error) {
    console.log(error)
  }
}

// export const getUserByComercialName = async (ComercialName: string) => {
//   try {
//     const user: Promise<Model<Partial<UserInterface>> | null> = UserEntity.findOne({
//       where: { Cnpj },
//       attributes: ["Id", "FirstName", "Email", "Cnpj", "Phone"],
//       include: [
//         {
//           model: sys
//         }
//       ]
//     });
//   }catch (error) {
//     console.log(error);
//   }
// }
