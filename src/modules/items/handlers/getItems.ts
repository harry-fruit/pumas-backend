import { ItemEntity } from "../../../database/entities/Item"

export const getItems = async (Category: string | undefined) => {
    try {
        const whereCondition = Category ? { Category } : undefined;

        const items = await ItemEntity.findAll({ where: whereCondition });

        return items

    } catch (error) {
        console.log(error)
    }
}