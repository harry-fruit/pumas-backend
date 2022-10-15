export type CreateUser = {
    FirstName: string,
    LastName: string
    Email: string
    Password: string
    Birthdate?: Date
    Gender: string
    Phone: string
    // Cpf?: string
    // Cep?: string
    // Address?: string
    // Number?: number
    // Complement?: string,
    // IdCountry?: number,
    // IdState?: number,
    CreatedAt?: Date,
    UpdatedAt?: Date
}