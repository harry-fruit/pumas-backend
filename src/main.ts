import express, { Express, NextFunction } from 'express'
import { Request, Response } from 'express';
import { DatabaseConnection } from "./database/Database";
import { userRouter } from './modules/users/router';
import { authRouter } from './modules/auth/router';

const app: Express = express();
const port: number = 4000; 

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

app.listen(port, () => `Serviço executando na port ${port}`);