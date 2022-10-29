import { DataType } from "sequelize-typescript";
import { DbInstance } from "../Database";

export const StoreEntity = DbInstance.define(
  "Store",
  {
    Id: {
      type: DataType.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    CommercialName: {
      type: DataType.STRING(50),
      allowNull: false,
    },
    City: {
        type: DataType.STRING(50),
        allowNull: false,
    },
    Address: {
        type: DataType.STRING(150),
        allowNull: false,
    },
    Logo: {
        type: DataType.BLOB,
        allowNull: true
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
    modelName: 'Store',
    freezeTableName: true
  }
);