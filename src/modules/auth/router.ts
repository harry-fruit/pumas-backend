import { Request, Response, Router } from "express";
import { getAuth } from "./handlers/getAuth";
import { config as LoadEnvironmentVariables } from "dotenv";
import { sendResponse } from "../../utils/HttpHandler";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

LoadEnvironmentVariables();

export const authRouter: Router = Router();

authRouter.post(
  "/login",
  async (request: Request, response: Response): Promise<any> => {
    try {
      const auth = await getAuth(request.body);

      sendResponse({
        response,
        statusCode: StatusCodes.OK,
        error: !auth,
        message: auth ? ReasonPhrases.OK : ReasonPhrases.UNAUTHORIZED,
        data: auth || "",
      });

    } catch (error: any) {
      console.log(error);
    }
  }
);
