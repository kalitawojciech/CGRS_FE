export interface IGameComment {
    id: string,
    gameId: string,
    message: string,
    user: ICommentUser,
}

export interface ICommentUser {
    id: string,
    email: string,
    nick: string,
    role: string
}


