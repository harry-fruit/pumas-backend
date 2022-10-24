import { Sequelize } from "sequelize";
import { DataType } from "sequelize-typescript";
import { DbInstance } from "../Database";
import { SysTypeEntity } from "./SysType";

export const SysTypeMDEntity = DbInstance.define(
  "SysTypeMD",
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
      allowNull: false
    },
    UniqueCode: {
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
    modelName: 'SysTypeMD',
    freezeTableName: true
  }
);


SysTypeMDEntity.belongsTo(SysTypeEntity, { foreignKey: 'IdSysType' })