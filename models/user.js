'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    FirsName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    Birthdate: DataTypes.DATE,
    Gender: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Cpf: DataTypes.STRING,
    Cep: DataTypes.STRING,
    Address: DataTypes.STRING,
    Number: DataTypes.NUMBER,
    Complement: DataTypes.STRING,
    IdCountry: DataTypes.NUMBER,
    IdState: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};