import express, { Express, NextFunction } from 'express'
import { Request, Response } from 'express';
import { userRouter } from './modules/users/router';
import { DatabaseConnection } from "./database/database";
import { authRouter } from './modules/auth/router';
import { syncDatabase } from './database/syncDatabase';

const app: Express = express();
const port: number = 3001; 

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
syncDatabase();

app.use("/user", userRouter);
app.use("/auth", authRouter);

app.listen(port, () => `Serviço executando na port ${port}`);