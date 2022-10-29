export type CreateUser = {
    FirstName?: string;
    LastName?: string;
    Email: string;
    Gender?: string;
    Phone: string;
    Cpf?: string;
    Cnpj?: string;
    Password: string;
    Cnh?: string;
    Plate?: string;
    UserType?: string;
    IdSysType?: number;
    CreatedAt?: Date,
    UpdatedAt?: Date
}