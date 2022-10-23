import moment from "moment"
import { AppEnvironment } from "./Defines"

export const logApp = (environment: string, port: number) => {
    const currentDate = moment().format('DD/MM/YYYY')
    environment = environment === AppEnvironment.DEV ? 'Desenvolvimento' : 'Produção'

    console.log(
        `
        *===================================*
           PUMAS-DELIVERY - API SERVICE 
           -------------------------------   
           Data de início:  ${currentDate}
           Ambiente: ${environment}
           Porta: ${port}
           Rota: ${process.env.API_URL}    
        *===================================*
        `
    )
}