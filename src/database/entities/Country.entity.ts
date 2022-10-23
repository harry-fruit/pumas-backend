import { DataType, ModelCtor } from "sequelize-typescript";
import { DbInstance } from "../Database";

export const CountryEntity = DbInstance.define(
  "Country",
  {
    Id: {
      type: DataType.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataType.STRING(50),
      allowNull: false,
      unique: true
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
    modelName: 'Country',
    freezeTableName: true
  }
);