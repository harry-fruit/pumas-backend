import { Sequelize } from "sequelize";
import { DataType } from "sequelize-typescript";
import { DbInstance } from "../Database";
import { SysTypeEntity } from "./SysType";
import { SysTypeMDEntity } from "./SysTypesMDs";
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
    IdSysTypeMD: {
      type: DataType.INTEGER,
      allowNull: false
    },
    IdUser: {
      type: DataType.INTEGER,
      allowNull: false
    },
    Value: {
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


XDUserEntity.belongsTo(SysTypeMDEntity, { foreignKey: 'IdSysTypeMD' })
XDUserEntity.belongsTo(UserEntity, { foreignKey: 'IdUser' })