import moment from "moment";
import { CountryEntity } from "../entities/Country.entity";
import { StateEntity } from "../entities/State.entity";
import { SysTypeEntity } from "../entities/SysType";
import { SysTypeMDEntity } from "../entities/SysTypesMDs";

export const mainSeed = async () => {
  try {
    await runCountrySeed();
    await runStateSeed();
    await runSysType();
    await runSysTypesMetaDatas();

  } catch (error){
    console.log(error)
  }
};

const runCountrySeed = async (): Promise<void> => {
    await CountryEntity.bulkCreate([
        {
          Name: "Brazil",
          CreatedAt: Date.now(),
        },
        {
          Name: "United States",
          CreatedAt: Date.now(),
        },
        {
          Name: "Argentina",
          CreatedAt: Date.now(),
        },
        {
          Name: "Canada",
          CreatedAt: Date.now(),
        },
      ]);
};

const runStateSeed = async (): Promise<void> => {
    await StateEntity.bulkCreate([
        {
          Name: "São Paulo",
          IdCountry: 1,
          CreatedAt: moment(),
        },
        {
          Name: "New York",
          IdCountry: 2,
          CreatedAt: moment(),
        },
        {
          Name: "Buenos Aires",
          IdCountry: 3,
          CreatedAt: moment(),
        },
        {
          Name: "Toronto",
          IdCountry: 4,
          CreatedAt: moment(),
        },
      ]);
};

const runSysType = async (): Promise<void> => {
  await SysTypeEntity.bulkCreate([
    {
      UniqueCode: 'PARTNER_STORE',
      Description: 'Store',
      CreatedAt: moment()
    },
    {
      UniqueCode: 'PARTNER_MOTOBOY',
      Description: 'Motoboy',
      CreatedAt: moment()
    },
    {
      UniqueCode: 'CLIENT',
      Description: 'Cliente',
      CreatedAt: moment()
    },
    
  ])
};

const runSysTypesMetaDatas = async (): Promise<void> => {
  await SysTypeMDEntity.bulkCreate([
    {
      IdSysType: 2,
      UniqueCode: 'CNH',
      CreatedAt: moment()
    },
    {
      IdSysType: 2,
      UniqueCode: 'PLACA_MOTO',
      CreatedAt: moment()
    },
    {
      IdSysType: 1,
      UniqueCode: 'SOCIAL_REASON',
      CreatedAt: moment()
    },
    {
      IdSysType: 1,
      UniqueCode: 'COMERCIAL_NAME',
      CreatedAt: moment()
    },
  ])
};

