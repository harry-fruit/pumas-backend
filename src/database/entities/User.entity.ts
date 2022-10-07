import { DataType } from "sequelize-typescript";
import { DbInstance } from "../database";

export const UserEntity = DbInstance.define(
  "User",
  {
    Id: {
      type: DataType.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    FirstName: {
      type: DataType.STRING(50),
      allowNull: false,
    },
    LastName: {
      type: DataType.STRING(50),
      allowNull: false,
    },
    Login: {
      type: DataType.STRING(150),
      allowNull: false,
    },
    Email: {
      type: DataType.STRING(150),
      allowNull: false,
    },
    Password: {
      type: DataType.STRING(255),
      allowNull: false,
    },
    Birthdate: {
      type: DataType.DATE,
      allowNull: false,
    },
    Gender: {
      type: DataType.STRING(10),
      allowNull: true,
    },
    Phone: {
      type: DataType.STRING(15),
      allowNull: false,
    },
    Cpf: {
      type: DataType.STRING(14),
      allowNull: false,
    },
    Cep: {
      type: DataType.STRING(9),
      allowNull: false,
    },
    Address: {
      type: DataType.STRING(255),
      allowNull: false,
    },
    Number: {
      type: DataType.STRING(255),
      allowNull: false,
    },
    Complement: {
      type: DataType.STRING(75),
      allowNull: true,
    },
    // IdCountry: {
    //   type: DataType.INTEGER,
    //   allowNull: false,
    // },
    // IdState: {
    //   type: DataType.INTEGER,
    //   allowNull: false,
    // },
    CountryName: {
      type: DataType.STRING(100),
      allowNull: false,
    },
    StateName: {
      type: DataType.STRING(100),
      allowNull: false,
    },
    CreatedAt: {
      type: DataType.DATE,
      allowNull: false,
    },
    UpdatedAt: {
      type: DataType.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    modelName: 'User',
    freezeTableName: true
  }
);