import { DataType } from "sequelize-typescript";
import { DbInstance } from "../Database";

export const OrderItemRelationshipEntity = DbInstance.define(
  "OrderItemRelationship",
  {
    Id: {
      type: DataType.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    IdOrder: {
        type: DataType.INTEGER,
        allowNull: false,
    },
    IdItem: {
        type: DataType.INTEGER,
        allowNull: false,
    },
    Quantity: {
        type: DataType.FLOAT,
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
    modelName: 'OrderItemRelationship',
    freezeTableName: true
  }
);