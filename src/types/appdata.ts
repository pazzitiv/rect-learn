import {User} from "./user";
import {Authenticate} from "./authenticate";

export type AppData =  {
    authenticate: {
        user: User | null,
        auth: Authenticate | null
    }
}
