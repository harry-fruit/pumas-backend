import { Sequelize } from "sequelize";
import { config as LoadEnvironmentVariables } from "dotenv";
import { mainSeed } from "./seeds/mainSeed";
import { AppEnvironment } from "../utils/Defines";
import { getEnvironment } from "../config/config";

LoadEnvironmentVariables();

export const DbInstance: Sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PWD as string,
  {
    dialect: "mariadb",
  }
);

export const DatabaseConnection = async (): Promise<void> => {
  try {
    await DbInstance.authenticate().then(async () => {
      const environment = getEnvironment();

      if (environment === AppEnvironment.DEV) {
        await DbInstance.sync({ force: true }).then(
          async (database: Sequelize) => {
            await mainSeed(database);
          }
        );
      } else {
        console.log("Database sync sucessful - PROD ENV");
      }
    });
  } catch (error: any) {
    throw new Error(error);
  }
};