import { User } from "./array-object"

export const filterByProperty = (users: User[], key: keyof User, property2: string | boolean | number) => {
    return users.filter((user)=> user[key] === property2)

}