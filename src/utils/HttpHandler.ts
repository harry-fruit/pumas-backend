import { Response, Router } from "express";

export type SendResponseParams = {
  response: Response
  statusCode: number;
  error: boolean;
  message?: string;
  data?: any;
};
export const sendResponse = ({
    response,
    statusCode,
    error,
    message,
    data
}: SendResponseParams) => {
    response
        .status(statusCode)
        .send({ error, data, message })
};
