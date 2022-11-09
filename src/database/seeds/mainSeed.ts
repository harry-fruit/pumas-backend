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
      UniqueCode: 'CONSUMER',
      Description: 'Consumidor',
      CreatedAt: moment()
    },
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
      IdSysType: 1, 
      FirstName: 'admin',
      LastName: 'test',
      Email: 'admin_test@example.com',
      Password: '$2b$10$L/IZf63zq4zZrjPUmSvHAOCmxX82Gh72FGweAV/FzRkz5zSQQj/s6',
      Phone: '12345689',
      Cpf: '12345689',
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
  await ItemEntity.bulkCreate([
    {
      UniqueCode: 'RED_LABEL',
      Category:'WHISKY',
      Name: 'Red Label 750ml',
      Description: 'Um Whisky rico e incorporado. Tem uma seleção inigualável de mais de 35 maltes na sua composição que garantem a sua superioridade.',
      Price: 71.90,
      Manufacturer: 'Johnnie Walker',
      Image: "https://images2.imgbox.com/53/cc/5T7tDDBg_o.png",
      CreatedAt: moment()
  },
  {
      UniqueCode: 'BLACK_LABEL',
      Category:'WHISKY',
      Name: 'Black Label 1000ml',
      Description: 'Destilado alcoólico de cevada germinada e grãos de cereais produzidos, combinados e engarrafados na Escócia.',
      Price: 199.90,
      Manufacturer: 'Johnnie Walker',
      Image: "https://images2.imgbox.com/67/6f/I2duEhxY_o.png",
      CreatedAt: moment()
  },
  {
      UniqueCode: 'BLONDE',
      Category:'WHISKY',
      Name: 'Blonde 700ml',
      Description: 'Um novo whisky leve, adocicado e com notas de baunilha que faz um drink perfeito para apreciar o pôr do sol.',
      Price: 79.90,
      Manufacturer: 'Johnnie Walker',
      Image: "https://images2.imgbox.com/17/2c/xo8i3iPg_o.png",
      CreatedAt: moment()
  },
  {
      UniqueCode: 'WINE_CASL_BLEND',
      Category:'WHISKY',
      Name: 'Wine Cask Blend 750ml',
      Description: 'Um uísque doce e rico. É a introdução perfeita para aqueles que são novos no whisky, mas também irá entusiasmar os amantes de whisky experientes',
      Price: 147.90,
      Manufacturer: 'Johnnie Walker',
      Image: "https://images2.imgbox.com/6d/9d/GxBrcvyu_o.png",
      CreatedAt: moment()
  },
  {
      UniqueCode: 'DOUBLE_BLACK',
      Category:'WHISKY',
      Name: 'Double Black 1L',
      Description: "Double Black é inspirado nos sabores icônicos com com intensidade sem igual. Um blend formidável para compartilhar em qualquer ocasião.",
      Price: 199.00,
      Manufacturer: 'Johnnie Walker',
      Image: "https://images2.imgbox.com/6f/30/xCqkkZfV_o.png",
      CreatedAt: moment()
  },
  {
      UniqueCode: 'SUCO_DE_UVA_E_MAÇA',
      Category:'SUCO',
      Name: 'Suco de uva e maçã 300ml',
      Description: "É equivalente ao suco de 1,2 cachos de uva e 1,1 maçã",
      Price: 4.89,
      Manufacturer: 'Natural One',
      Image: "https://images2.imgbox.com/76/27/5x8k8Qf2_o.png",
      CreatedAt: moment()
  },
  {
      UniqueCode: 'SUCO_DEL_VALLE_DE_LARANJA',
      Category:'SUCO',
      Name: 'Suco Del Valle de Laranja 1L',
      Description: "Estamos falando em bebidas que contém até 50% de suco ou polpa em sua elaboração.",
      Price: 13.80,
      Manufacturer: 'Del Valle',
      Image: "https://images2.imgbox.com/a9/5a/AHl5bQbw_o.png",
      CreatedAt: moment()
  },
  {
      UniqueCode: 'SUCO_DE_MACA_COM_LARANJA',
      Category:'SUCO',
      Name: 'Suco de maçã com laraja 1L',
      Description: "O Suco de Laranja Integral Orgânico Organovita é rico em Vitamina c, elaborado com laranjas e maçãs orgânicas! Sem adição de água.",
      Price: 11.90,
      Manufacturer: 'Organovita',
      Image: "https://images2.imgbox.com/a6/83/9ailePKO_o.png",
      CreatedAt: moment()
  },
  {
      UniqueCode: 'PEPSI_COLA',
      Category:'REFRIGERANTE',
      Name: 'Pepsi Cola 350ml',
      Description: "A fórmula da Pepsi foi criada para fins medicinais. Mas seu sabor agradou tanto que o xarope começou a ser consumido simplesmente por prazer",
      Price: 3.00,
      Manufacturer: 'Pepsi',
      Image: "https://images2.imgbox.com/c8/b7/2AN62K3Y_o.png",
      CreatedAt: moment()
  },
  {
      UniqueCode: 'SPRITE',
      Category:'REFRIGERANTE',
      Name: 'Sprite 350ml',
      Description: "Refrigerante elaborado a base de água gaseificada, açúcar, suco natural de limão 2,5%, aroma natural, acidulante ins 330, e conservador ins 211.",
      Price: 2.74,
      Manufacturer: 'Sprite',
      Image: "https://images2.imgbox.com/33/8a/92Pl9BZG_o.png",
      CreatedAt: moment()
  },
  {
      UniqueCode: 'KUAT_GUARANA',
      Category:'REFRIGERANTE',
      Name: 'Kuat Guaraná 350ml',
      Description: "O sabor do guaraná, uma fruta típica da Amazônia, faz do Kuat um dos refrigerantes mais saborosos do Brasil.",
      Price: 3.19,
      Manufacturer: 'Kuat',
      Image: "https://images2.imgbox.com/ff/3c/W30mr2pI_o.png",
      CreatedAt: moment()
  },
  {
      UniqueCode: 'GUARANA_JESUS',
      Category:'REFRIGERANTE',
      Name: 'Guaraná Jesus 350ml',
      Description: "O maranhense refrigerante Jesus faz parte da cultura do povo do estado e também é muito conhecido no Nordeste.",
      Price: 8.99,
      Manufacturer: 'Jesus',
      Image: "https://images2.imgbox.com/d0/0b/nY9wxagC_o.png",
      CreatedAt: moment()
  },
  {
      UniqueCode: 'COCA_COLA',
      Category:'REFRIGERANTE',
      Name: 'Coca-Cola 350ml',
      Description: "O sabor tradicional da Coca-Cola original você já conhece. A opção se destaca por ser um dos refrigerantes mais vendidos do mundo.",
      Price: 2.99,
      Manufacturer: 'Cola-Cola',
      Image: "https://images2.imgbox.com/56/3a/TxVbW9Nr_o.png",
      CreatedAt: moment()
  },
  {
      UniqueCode: 'CHA_LEAO_GENGIBRE_COM_ESPECIARIAS',
      Category:'CHA',
      Name: 'Chá Gengibre com Especiarias 2g 10un',
      Description: "Nesse chá misto, temos também hibisco, maçã, beterraba, rosa silvestre, tudo isso enriquecido com rum e laranja.",
      Price: 7.25,
      Manufacturer: 'Leão',
      Image: "https://images2.imgbox.com/ca/cc/cZRXlFqN_o.png",
      CreatedAt: moment()
  },
  {
      UniqueCode: 'CHA_DE_MARACUJA_E_PESSEGO',
      Category:'CHA',
      Name: 'Chá de Maracujá e Pessêgo 220g 60un',
      Description: "Combinação de ervas como o chá verde, a cargueja, a erva-mate, o hortelã, o gengibre, o guaraná, a sálvia e o hibisco.",
      Price: 55.50,
      Manufacturer: 'Chánical',
      Image: "https://images2.imgbox.com/2e/6d/zpJTBjr3_o.png",
      CreatedAt: moment()
  },
  {
      UniqueCode: 'CHA_VERDE_HIBISCO',
      Category:'CHA',
      Name: 'Chá Verde Hibisco 19,5g 13un',
      Description: "Esse chá verde com hibisco da BiO2 é um excelente aliado no emagrecimento, principalmente pela combinação do chá verde e hibisco.",
      Price: 8.90,
      Manufacturer: 'biO2',
      Image: "https://images2.imgbox.com/7b/ea/81AU31M0_o.png",
      CreatedAt: moment()
  },
  {
      UniqueCode: 'CHA_PRETO_AHMAD',
      Category:'CHA',
      Name: 'Chá Preto Ahmad 20g 10un',
      Description: null,
      Price: 13.90,
      Manufacturer: 'Ahmad Tea',
      Image: "https://images2.imgbox.com/e5/8b/zoYN44RY_o.png",
      CreatedAt: moment()
  },
  {
      UniqueCode: 'VODKA_LEONOFF',
      Category:'VODKA',
      Name: 'Vodka Leonoff 965ml',
      Description: "Teor alcóolico de 37,5%. Produzida pela Indústria de Bebidas Paris, a Leonoff é facilmente encontrada em mercados físicos e lojas virtuais pelo Brasil.",
      Price: 13.99,
      Manufacturer: 'Bebidas Paris',
      Image: "https://images2.imgbox.com/e6/a2/LmzzVyb8_o.png",
      CreatedAt: moment()
  },
  {
      UniqueCode: 'VODKA_ICON',
      Category:'VODKA',
      Name: 'Vodka Icon 750ml',
      Description: "Teor alcóolico de 40%. A Vodka Icon é uma bebida que se destaca pela sua grande pureza e suavidade",
      Price: 27.90,
      Manufacturer: 'Icon',
      Image: "https://images2.imgbox.com/1b/de/GCTGffKg_o.png",
      CreatedAt: moment()
  },
  {
      UniqueCode: 'VODKA_VORUS',
      Category:'VODKA',
      Name: 'Vodka Vorus 1L',
      Description: "Teor alcóolico 37%. A Salton iniciou sua história em 1910. A marca informa que seu destilado é feito a partir da combinação de álcool neutro de cana-de-açúcar e água extremamente pura",
      Price: 38.75,
      Manufacturer: 'Salton',
      Image: "https://images2.imgbox.com/25/b1/RyCJgy8y_o.png",
      CreatedAt: moment()
  },
  {
      UniqueCode: 'VODKA_KADOV_VANILLA',
      Category:'VODKA',
      Name: 'Vodka Kadov Vanilla 1L',
      Description: "Teor alcóolico 35%. De acordo com a marca CRS, produtora da Vodka Kadov, a bebida é produzida com o mesmo padrão de qualidade das vodkas europeias de primeira linha.",
      Price: 36.90,
      Manufacturer: 'Kadov',
      Image: "https://images2.imgbox.com/7b/a1/DgFb037o_o.png",
      CreatedAt: moment()
  },
  {
      UniqueCode: 'VODKA_BALALAIKA',
      Category:'VODKA',
      Name: 'Vodka Balalaika 1L',
      Description: "Teor alcóolico 37,5%. A Vodka Balalaika é uma bebida tridestilada, pura, com sabor marcante, e tratada cuidadosamente com carvão ativado que lhe dá a tonalidade cristalina.",
      Price: 15.99,
      Manufacturer: 'Balalaika',
      Image: "https://images2.imgbox.com/98/91/2tzAI3LY_o.png",
      CreatedAt: moment()
  }, 
  
])

}



