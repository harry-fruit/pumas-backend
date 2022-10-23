import { DataType } from "sequelize-typescript";
import { DbInstance } from "../Database";

export const SysTypeEntity = DbInstance.define(
  "SysType",
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
    modelName: 'SysType',
    freezeTableName: true
  }
);

// UserEntity.belongsTo(CountryEntity, { foreignKey: 'IdCountry' })
// UserEntity.belongsTo(StateEntity, { foreignKey: 'IdState' })