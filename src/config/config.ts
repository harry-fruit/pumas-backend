import { AppEnvironment } from "../utils/Defines";

export const getEnvironment = (): string => {
  if (process.env.NODE_ENV) {
    return process.env.NODE_ENV as string;
  } else {
    const environment = (
      process.argv.find((arg) => arg.indexOf("NODE_ENV") > -1) as string
    ).split("=")[1];
    switch (environment) {
      case AppEnvironment.DEV:
        return AppEnvironment.DEV;
        
      case AppEnvironment.PROD:
        return AppEnvironment.PROD

        default:
          return '';
    };
  }
};
