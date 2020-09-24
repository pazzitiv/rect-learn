import {Role} from "./role";
import {Group} from "./group";

export type User = {
    id: bigint;
    login: string;
    email: string;
    role: Role;
    groups: Group[];
    lastName: string;
    firstName: string;
    secondName: string;
    fullName: string;
    shortName: string;
    createdAt: Date;
    updatedAt: Date;
    active: boolean;
}
