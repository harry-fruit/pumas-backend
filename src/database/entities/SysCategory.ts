import { DataType } from "sequelize-typescript";
import { DbInstance } from "../Database";

export const SysCategoryEntity = DbInstance.define(
  "SysCategory",
  {
    Id: {
      type: DataType.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    UniqueCode: {
        type: DataType.STRING(255),
        unique: true,
        allowNull: false
    },
    Description: {
        type: DataType.STRING(255),
        unique: true,
        allowNull: false
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
    modelName: 'SysCategory',
    freezeTableName: true
  }
);
