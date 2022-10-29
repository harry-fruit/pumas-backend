import { DataType } from "sequelize-typescript";
import { DbInstance } from "../Database";

export const OrderEntity = DbInstance.define(
  "Order",
  {
    Id: {
      type: DataType.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    IdUser: {
        type: DataType.INTEGER,
        allowNull: false,
    },
    IdStore: {
        type: DataType.INTEGER,
        allowNull: false,
    },
    UniqueCode: {
      type: DataType.STRING(255),
      allowNull: false,
    },
    TotalAmount: {
        type: DataType.FLOAT(50),
        allowNull: false,
    },
    Address: {
        type: DataType.STRING(150),
        allowNull: false,
    },
    EndDate: {
        type: DataType.DATE,
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
    modelName: 'Order',
    freezeTableName: true
  }
);