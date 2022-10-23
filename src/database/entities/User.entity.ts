import { DataType } from "sequelize-typescript";
import { DbInstance } from "../Database";
import { CountryEntity } from "./Country.entity";
import { StateEntity } from "./State.entity";
import { SysTypeEntity } from "./SysType";

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
    IdSysType: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    FirstName: {
      type: DataType.STRING(50),
      allowNull: false,
    },
    LastName: {
      type: DataType.STRING(50),
      allowNull: false,
    },
    Email: {
      type: DataType.STRING(150),
      allowNull: false,
      unique: false
    },
    Password: {
      type: DataType.STRING(255),
      allowNull: false,
    },
    Birthdate: {
      type: DataType.DATE,
      allowNull: true,
    },
    Gender: {
      type: DataType.STRING(10),
      allowNull: true,
    },
    Phone: {
      type: DataType.STRING(15),
      allowNull: true,
      unique: true
    },
    Cpf: {
      type: DataType.STRING(14),
      allowNull: false,
      unique: true
    },
    Cep: {
      type: DataType.STRING(9),
      allowNull: true,
    },
    Address: {
      type: DataType.STRING(255),
      allowNull: true,
    },
    Number: {
      type: DataType.STRING(255),
      allowNull: true,
    },
    Complement: {
      type: DataType.STRING(75),
      allowNull: true,
    },
    IdCountry: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    IdState: {
      type: DataType.INTEGER,
      allowNull: true,
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

UserEntity.belongsTo(CountryEntity, { foreignKey: 'IdCountry' })
UserEntity.belongsTo(StateEntity, { foreignKey: 'IdState' })
UserEntity.belongsTo(SysTypeEntity, { foreignKey: 'IdSysType' })