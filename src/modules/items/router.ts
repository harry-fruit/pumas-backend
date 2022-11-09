import { Request, Response, Router } from "express";
import { config as LoadEnvironmentVariables } from "dotenv";
import { sendResponse } from "../../utils/HttpHandler";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { getItems } from "./handlers/getItems";
import { ItemEntity } from "../../database/entities/Item";

LoadEnvironmentVariables();

export const itemRouter: Router = Router();

itemRouter.get(
  "/",
  async (request: Request, response: Response): Promise<any> => {
    try {
      const category: string | undefined = request.query.category as string | undefined;
      const items = await getItems(category);

      sendResponse({
        response,
        statusCode: StatusCodes.OK,
        error: !items,
        message: items ? ReasonPhrases.OK : ReasonPhrases.UNAUTHORIZED,
        data: items || [],
      });

    } catch (error: any) {
      console.log(error);
    }
  }
);

itemRouter.get(
  "/inspect",
  async (request: Request, response: Response): Promise<any> => {
    try {
      const items = await ItemEntity.findAll();

      response.send(JSON.stringify(items));

    } catch (error: any) {
      console.log(error);
    }
  }
);


