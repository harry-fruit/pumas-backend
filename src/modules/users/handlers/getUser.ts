import { Model } from "sequelize";
import { UserEntity } from "../../../database/entities/User.entity";
import { User } from "../interface/User.interface";

export const getUserByCpf = async (
  Cpf: string
): Promise<Model<Partial<User>> | null | undefined> => {
  try {
    const user: Promise<Model<Partial<User>> | null> = UserEntity.findOne({
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
): Promise<Model<Partial<User>> | null | undefined> => {
  try {
    const user: Promise<Model<Partial<User>> | null> = UserEntity.findOne({
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
): Promise<Model<Partial<User>> | null | undefined> => {
  try {
    const user: Promise<Model<Partial<User>> | null> = UserEntity.findOne({
      where: { Phone },
      attributes: ["Id", "FirstName", "Email", "Cpf", "Phone"],
    });

    return user;
  } catch (error) {
    console.log(error);
  }
};
