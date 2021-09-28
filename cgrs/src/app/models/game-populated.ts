import { IGameComment } from "./game-comment";
import { ICategory } from "./category";

export interface IGamePopulated {
    id: string,
    name: string,
    description: string,
    category: ICategory,
    isActive: boolean,
    isAdultOnly: boolean,
    averageScore: number,
    gameComments: IGameComment[],
}