import { DataType, ModelCtor } from "sequelize-typescript";
import { DbInstance } from "../Database";
import { CountryEntity } from "./Country.entity";

export const StateEntity = DbInstance.define(
  "State",
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
    IdCountry: {
      type: DataType.INTEGER,
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
    modelName: 'State',
    freezeTableName: true
  }
);

StateEntity.belongsTo(CountryEntity, { foreignKey: 'IdCountry' })