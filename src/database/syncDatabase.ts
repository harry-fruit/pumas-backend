import { CountryEntity } from "./entities/Country.entity"
import { StateEntity } from "./entities/State.entity";
import { UserEntity } from "./entities/User.entity";

export const syncDatabase = async () => {
    UserEntity.sync();
    CountryEntity.sync();
    StateEntity.sync();

    // UserEntity.sync({ force:true });
    // CountryEntity.sync({ force:true });
    // StateEntity.sync({ force:true });
}