import { Sequelize } from 'sequelize';
import { config as LoadEnvironmentVariables } from 'dotenv';

LoadEnvironmentVariables();

export const DbInstance: Sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string, 
    process.env.DB_PWD as string, 
    {
      dialect: 'mariadb',
    },
  );

export const DatabaseConnection = async (): Promise<void> => {
    try {
        await DbInstance.authenticate()
            .then( () => console.log('Database authenticate sucessful') )
        await DbInstance.sync({ force:true })
        // await DbInstance.sync()
            .then( ()=>{
                console.log('Database sync sucessful')
            });
    } catch(error: any) {
        throw new Error(error);
    }
};
