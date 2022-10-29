import moment from "moment";
import { CountryEntity } from "../entities/Country.entity";
import { ItemEntity } from "../entities/Item";
import { StateEntity } from "../entities/State.entity";
import { StoreEntity } from "../entities/Store";
import { SysCategoryEntity } from "../entities/SysCategory";
import { SysTypeEntity } from "../entities/SysType";
import { SysTypeMDEntity } from "../entities/SysTypesMDs";
import { UserEntity } from "../entities/User.entity";
import { XDUserEntity } from "../entities/XDUsers";

export const mainSeed = async () => {
  try {
    await runCountrySeed();
    await runStateSeed();
    await runSysType();
    await runSysTypesMetaDatas();
    await runUsers();
    await runUserExtraData();
    await runSysCategory();
    await runStoreData();
    await runItemData();

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

const runSysCategory = async (): Promise<void> => {
  await SysCategoryEntity.bulkCreate([
    {
      UniqueCode: 'VINHO',
      Description: 'Vinho',
      CreatedAt: moment()
    },
    {
      UniqueCode: 'REFRIGERANTE',
      Description: 'Refrigerante',
      CreatedAt: moment()
    },
    {
      UniqueCode: 'CERVEJA',
      Description: 'Cerveja',
      CreatedAt: moment()
    },
    {
      UniqueCode: 'CHA',
      Description: 'Chá',
      CreatedAt: moment()
    },
    {
      UniqueCode: 'WHISKY',
      Description: 'Whisky',
      CreatedAt: moment()
    },
    
  ])
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
      UniqueCode: 'CONSUMER',
      Description: 'Consumidor',
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

const runUsers = async (): Promise<void> => {
  await UserEntity.bulkCreate([
    {
      IdSysType: 1, //Loja
      Email: 'salgados.mari@example.com',
      Password: '123',
      Phone: '7481516',
      Cnpj: '123456789',
      CreatedAt: moment()
    }
  ])
}

const runUserExtraData = async(): Promise<void> => {
  await XDUserEntity.bulkCreate([{
    IdUser: 1,
    IdSysTypeMD: 3,
    Value: 'Comercio de Salgados LTD',
    CreatedAt: moment()
  }, {
    IdUser: 1,
    IdSysTypeMD: 4,
    Value: 'Salgados da Mari',
    CreatedAt: moment()
  }])
}

const runStoreData = async(): Promise<void> => {
  await StoreEntity.bulkCreate([{
    CommercialName: 'Tonhão Bebidas',
    City: 'São Paulo',
    Address: 'Rua Sebastião Rodrigues',
    Logo: null,
    CreatedAt: moment()
  }, {
    CommercialName: 'Bar do Zequinha',
    City: 'São Paulo',
    Address: 'Rua Ademir Cordeiro',
    Logo: null,
    CreatedAt: moment()
  }, {
    CommercialName: 'Bar do Zé',
    City: 'São Paulo',
    Address: 'Rua Anésio de Moraes',
    Logo: null,
    CreatedAt: moment()
  }, {
    CommercialName: 'Drinks Jaque',
    City: 'São Paulo',
    Address: 'Rua Francisco Alves Rodrigues',
    Logo: null,
    CreatedAt: moment()
  }, {
    CommercialName: 'Downtown Drinks',
    City: 'São Paulo',
    Address: 'Rua Fausto Lourenço Gomes',
    Logo: null,
    CreatedAt: moment()
  }])

}

const runItemData = async(): Promise<void> => {
  await ItemEntity.bulkCreate([{
    Category:'WHISKY',
    UniqueCode: 'WHITE_HORSE',
    Description: 'White Horse',
    Price: 89.99,
    Manufacturer: 'Diageo',
    Image: null,
    CreatedAt: moment()
  },
  {
    UniqueCode: 'SUCO_MAGUARY',
    Category:'SUCO',
    Description: 'Suco de Laranja',
    Price: 2.99,
    Manufacturer: 'Maguary',
    Image: null,
    CreatedAt: moment()
  },
  {
    UniqueCode: 'COCA_COLA',
    Category:'REFRIGERANTE',
    Description: 'Coca-cola',
    Price: 8.99,
    Manufacturer: 'Coca-cola',
    Image: null,
    CreatedAt: moment()
  }
])

}



