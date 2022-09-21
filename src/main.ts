import express, { Express, NextFunction } from 'express'
import { Router, Request, Response } from 'express';
import { userRouter } from './modules/users/router';
import { DatabaseConnection } from "./database/database";

const app: Express = express();
const port: number = 3000; 

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

app.listen(port, () => `Serviço executando na porta ${port}`);