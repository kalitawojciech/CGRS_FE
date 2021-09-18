import { IGameMark } from "./game-mark";

export interface IGame {
    id: string,
    name: string,
    description: string,
    categoryName: string,
    isActive: boolean,
    isAdultOnly: boolean,
    averageScore: number,
    gameMarkResponse: IGameMark,
}