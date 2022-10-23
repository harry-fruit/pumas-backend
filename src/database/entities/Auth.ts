import { DataType } from "sequelize-typescript";
import { DbInstance } from "../Database";
import { UserEntity } from "./User.entity";

export const AuthEntity = DbInstance.define(
  "Auth",
  {
    Id: {
      type: DataType.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    Token: {
        type: DataType.STRING(500),
        allowNull: false,
    },
    IdUser: {
        type: DataType.INTEGER,
        allowNull: false,
    },
    ExpireDate: {
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
    modelName: 'Auth',
    freezeTableName: true
  }
);

UserEntity.belongsTo(AuthEntity, { foreignKey: 'IdUser' })