import { Request, Response, Router } from "express";
import { getAuth } from "./handlers/getAuth";
import { config as LoadEnvironmentVariables } from 'dotenv';

LoadEnvironmentVariables();

export const authRouter: Router = Router();

authRouter.post("/login", async (request: Request, response: Response): Promise<any> => {
    try {
        const auth = await getAuth(request.body);

        response.send(auth);
        // if (auth) {
        //     response.redirect(`${process.env.URL_BASE}/Catalog`);
        // } else {
        //     response
        //         .status(404)
        //         .send('Not Found');
        // }
        
    
      } catch (error: any) {
        console.log(error);
    };
  }
);

