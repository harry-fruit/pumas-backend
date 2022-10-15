export type CreateUser = {
    FirstName: string,
    LastName: string
    Email: string
    Password: string
    Birthdate?: Date
    Gender: string
    Phone: string
    CreatedAt?: Date,
    UpdatedAt?: Date
}