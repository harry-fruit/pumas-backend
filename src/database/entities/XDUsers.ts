import { Sequelize } from "sequelize";
import { DataType } from "sequelize-typescript";
import { DbInstance } from "../Database";
import { SysTypeEntity } from "./SysType";
import { UserEntity } from "./User.entity";

export const XDUserEntity = DbInstance.define(
  "XDUser",
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
    IdUser: {
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
    modelName: 'XDUser',
    freezeTableName: true
  }
);


XDUserEntity.belongsTo(SysTypeEntity, { foreignKey: 'IdSysType' })
XDUserEntity.belongsTo(UserEntity, { foreignKey: 'IdUser' })