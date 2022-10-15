import { Request, Response, Router } from "express";
import { createUser } from "./handlers/createUser";
import { config as LoadEnvironmentVariables } from "dotenv";
import { getUserByCpf, getUserByEmail, getUserByPhone } from "./handlers/getUser";
import { sendResponse } from "../../utils/HttpHandler";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

LoadEnvironmentVariables();

export const userRouter: Router = Router();

type CreateUserPayload = {
  FirstName: string;
  LastName: string;
  Email: string;
  Gender: string;
  Cpf: string;
  Phone: string;
  Password: string;
};

userRouter.post(
  "/create-user",
  async (request: Request, response: Response): Promise<void> => {
    try {
      const payload: CreateUserPayload = request.body;
      const user = await createUser(payload);

      if (user) {
        sendResponse({
          response,
          statusCode: StatusCodes.CREATED,
          error: false,
          message: ReasonPhrases.CREATED,
          data: user,
        });
      } else {
        sendResponse({
          response,
          statusCode: StatusCodes.BAD_REQUEST,
          error: false,
          message: ReasonPhrases.BAD_REQUEST,
          data: user,
        });
      }
    } catch (error: any) {
      console.log(error);
    }
  }
);

userRouter.get(
  "/get-by-cpf/:Cpf",
  async (request: Request, response: Response) => {
    try {
      const cpf = request.params.Cpf;
      const user = await getUserByCpf(cpf);

      if (user) {

        sendResponse({
          response,
          statusCode: StatusCodes.OK,
          error: false,
          message: ReasonPhrases.OK,
          data: user,
        });

      } else {

        sendResponse({
          response,
          statusCode: StatusCodes.OK,
          error: false,
          message: ReasonPhrases.OK,
          data: user,
        });

      };

    } catch (error: any) {
      console.log(error);
    }
  }
);

userRouter.get(
  "/get-by-email/:Email",
  async (request: Request, response: Response) => {
    try {
      const email = request.params.Email;
      const user = await getUserByEmail(email);

      if (user) {

        sendResponse({
          response,
          statusCode: StatusCodes.OK,
          error: false,
          message: ReasonPhrases.OK,
          data: user,
        });

      } else {

        sendResponse({
          response,
          statusCode: StatusCodes.OK,
          error: false,
          message: ReasonPhrases.OK,
          data: user,
        });

      };

    } catch (error: any) {
      sendResponse({
        response,
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        error: false,
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
        data: null,
      });
    }
  }
);

userRouter.get(
  "/get-by-phone/:Phone",
  async (request: Request, response: Response) => {
    try {
      const phone = request.params.Phone;
      const user = await getUserByPhone(phone);

      if (user) {

        sendResponse({
          response,
          statusCode: StatusCodes.OK,
          error: false,
          message: ReasonPhrases.OK,
          data: user,
        });

      } else {

        sendResponse({
          response,
          statusCode: StatusCodes.OK,
          error: false,
          message: ReasonPhrases.OK,
          data: user,
        });

      };

    } catch (error: any) {
      sendResponse({
        response,
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        error: false,
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
        data: null,
      });
    }
  }
);
