import { Request, Response, Router } from "express";
import { createUser } from "./handlers/createUser";
import { config as LoadEnvironmentVariables } from 'dotenv';

LoadEnvironmentVariables();

export const userRouter: Router = Router();

userRouter.post("/create-user", async (request: Request, response: Response): Promise<void> => {
    try {

      const user = await createUser(request.body);
      if (user) {
        response.redirect(`${process.env.URL_BASE}/auth/Login`)
      }
    
      } catch (error: any) {
        console.log(error);
      // throw HttpResponse(HttpStatus.INTERNAL_SERVER_ERROR, HttpStatusCode.INTERNAL_SERVER_ERROR, error);
    };
  }
);

// userRouter.get("/", async (request: Request, response: Response, next): Promise<void> => {
//     try {
//       const limit = Number.parseInt(request.query.limit as string);
//       const currentPage = Number.parseInt(request.query.currentPage as string);

//       const allUsers = await getAllUsers({ limit, currentPage });
//       const formattedResponse = HttpResponse(HttpStatus.OK, HttpStatusCode.OK, allUsers);

//       response
//         .status(HttpStatusCode.OK)
//         .send(formattedResponse);
        
//     } catch (error: any) {
//       // next(HandlerExeption( HttpStatus.INTERNAL_SERVER_ERROR, HttpStatusCode.INTERNAL_SERVER_ERROR, error));
//     }
//   }
// );

// userRouter.get(
//   "/:rg",
//   async (request: Request, response: Response): Promise<void> => {
//     try {
//       const { rg } = request.params;

//       const user: Model<UserInterface> = await getUser(rg);
//       const formattedResponse: HttpResponseType = HttpResponse(HttpStatus.OK, HttpStatusCode.OK, user);

//       response.send(formattedResponse);
//     } catch (error: any) {
//       // throw HandlerExeption(HttpStatus.INTERNAL_SERVER_ERROR, HttpStatusCode.INTERNAL_SERVER_ERROR, error);
//     }
//   }
// );

// //TODO: Fixar retorno
// userRouter.patch("/update-user", async (request: Request, response: Response): Promise<void> => {
//     try {
//       const updateResponse = await updateUser(request.body as UpdateUserDto);
//       const formattedResponse = HttpResponse(HttpStatus.CREATED, HttpStatusCode.CREATED, updateResponse);

//       response
//         .status(HttpStatusCode.CREATED)
//         .send(formattedResponse);

//     } catch (error: any) {
//       // throw HttpResponse(HttpStatus.INTERNAL_SERVER_ERROR, HttpStatusCode.INTERNAL_SERVER_ERROR, error);
//     }
//   }
// );

// //TODO: Fixar retorno
// userRouter.delete( "/delete-user", async (request: Request, response: Response): Promise<void> => {
//     try {

//       const { id } = request.body;
//       const isDeleted: DeleteHandlerResponseType = await deleteUser(id);
//       const formattedResponse = HttpResponse(HttpStatus.ACCEPTED, HttpStatusCode.ACCEPTED, isDeleted)
      
//       response
//         .status(HttpStatusCode.ACCEPTED)
//         .send(formattedResponse);
      
//     } catch (error: any) {
//       throw HttpResponse(HttpStatus.INTERNAL_SERVER_ERROR, HttpStatusCode.INTERNAL_SERVER_ERROR, error);
//     }
//   }
// );