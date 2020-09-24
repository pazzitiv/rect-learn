import {User} from "./user";

export type Authenticate = {
    user: User | null,
    auth: {
        access_token: string,
        token_type: string,
        expires_in: number
    } | null
}
