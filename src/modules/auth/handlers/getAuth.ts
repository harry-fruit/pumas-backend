import { compare } from "bcrypt";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { UserEntity } from "../../../database/entities/User.entity";
import Jwt from "jsonwebtoken";
import { getAuthToken } from "../../../utils/Jwt";
import { AuthEntity } from "../../../database/entities/Auth";
import moment from "moment";

export type AuthLogin = {
  Email: string;
  Password: string;
};

export type AuthResponse = {
  error: boolean;
  authStatusCode: number;
  authStatusMessage: string;
  token: string | null;
};

export const getAuth = async ({
  Email,
  Password,
}: AuthLogin): Promise<AuthResponse | undefined> => {
  try {
    const user = (await UserEntity.findOne({ where: { Email } })) as any;
    const userData = user && user.dataValues ? user.dataValues : null;

    if (!user) {
      return {
        error: true,
        authStatusCode: StatusCodes.UNAUTHORIZED,
        authStatusMessage: ReasonPhrases.UNAUTHORIZED,
        token: null,
      };
    }

    const match = await compare(Password, userData.Password);

    if (!match) {
      return {
        error: true,
        authStatusCode: StatusCodes.UNAUTHORIZED,
        authStatusMessage: ReasonPhrases.UNAUTHORIZED,
        token: null,
      };
    }

    const token = getAuthToken(Email, Password);
    
    await AuthEntity.create({
      Token: token,
      IdUser: userData.Id,
      ExpireDate: moment().add(1, "hour"),
      CreatedAt: moment()
    });

    return {
      error: false,
      authStatusCode: StatusCodes.OK,
      authStatusMessage: ReasonPhrases.OK,
      token,
    };
  } catch (error) {
    console.log(error);
  }
};
