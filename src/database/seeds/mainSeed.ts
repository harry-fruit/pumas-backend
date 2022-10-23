import { Sequelize } from "sequelize";

export const mainSeed = async (databaseInstance: Sequelize) => {
    await runCountrySeed(databaseInstance);
    await runStateSeed(databaseInstance);
};

const runCountrySeed = async (databaseInstance: Sequelize): Promise<void> => {
    await databaseInstance.models.Country.bulkCreate([
        {
          Name: "Brazil",
          CreatedAt: Date.now(),
        },
        {
          Name: "United States",
          CreatedAt: Date.now(),
        },
        {
          Name: "Argentina",
          CreatedAt: Date.now(),
        },
        {
          Name: "Canada",
          CreatedAt: Date.now(),
        },
      ]);
};

const runStateSeed = async (databaseInstance: Sequelize): Promise<void> => {
    await databaseInstance.models.State.bulkCreate([
        {
          Name: "São Paulo",
          IdCountry: 1,
          CreatedAt: Date.now(),
        },
        {
          Name: "New York",
          IdCountry: 2,
          CreatedAt: Date.now(),
        },
        {
          Name: "Buenos Aires",
          IdCountry: 3,
          CreatedAt: Date.now(),
        },
        {
          Name: "Toronto",
          IdCountry: "4",
          CreatedAt: Date.now(),
        },
      ]);
};
