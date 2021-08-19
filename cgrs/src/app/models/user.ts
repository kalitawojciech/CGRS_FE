import { Role } from "./role";

export interface IUser {
    id: string;
    email: string;
    token: string;
    role: Role;
}