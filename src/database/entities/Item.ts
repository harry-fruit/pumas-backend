import { DataType } from "sequelize-typescript";
import { DbInstance } from "../Database";

export const ItemEntity = DbInstance.define(
  "Item",
  {
    Id: {
      type: DataType.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    Category: {
        type: DataType.STRING(255),
        allowNull: false,
    },
    UniqueCode: {
      type: DataType.STRING(255),
      allowNull: false,
    },
    Description: {
        type: DataType.STRING(255),
        allowNull: false, 
    },
    Price: {
        type: DataType.FLOAT,
        allowNull: false,
    },
    Manufacturer: {
        type: DataType.STRING(255),
        allowNull: true,
    },
    Image: {
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
    modelName: 'Item',
    freezeTableName: true
  }
);