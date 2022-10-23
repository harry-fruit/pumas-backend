import { sign } from "jsonwebtoken";

export const getAuthToken = (Email: string, Password: string): string => {
  return sign({ Email, Password }, process.env.JWT_SECRET as string, {
    expiresIn: "1h",
  });
};
