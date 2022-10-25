import express, { Express, NextFunction } from 'express'
import { Request, Response } from 'express';
import { DatabaseConnection } from "./database/Database";
import { userRouter } from './modules/users/router';
import { authRouter } from './modules/auth/router';
import { config as LoadEnvironmentVariables } from 'dotenv';
import moment from 'moment';
import 'moment/locale/pt-br';
import { logApp } from './utils/Logs';
import { getEnvironment } from './config/config';
import { mainSeed } from './database/seeds/mainSeed';
import { mainViews } from './database/views/migrations/mainViews';
const environment = getEnvironment();


const app: Express = express();
const port: number = parseInt((process.env.API_PORT as string));

moment.locale('pt-br')

LoadEnvironmentVariables();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use( (error:any, request:Request, response: Response, next: NextFunction) => {
  console.error(error.stack);
  response
      .status(500)
      .send('Something broke!');
});

//DB Config
DatabaseConnection();

app.use("/user", userRouter);
app.use("/auth", authRouter);

setTimeout(()=> {
  mainSeed();
  mainViews();
}, 5 * 1000)

app.listen(port, () => logApp(getEnvironment(), port));