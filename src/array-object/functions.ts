import { Product, User } from "./array-object"

export const filterByProperty = (users: User[], key: keyof User, property2: string | boolean | number) => {
    return users.filter((user)=> user[key] === property2)
}

export const groupBy = (products: Product[], filter: keyof Product) => {
    return products.reduce((acc: Record<string,Product[]>,product)=>{
        const key = product[filter] as string
        if(acc[key]){
            return {...acc, [key]: [...acc[key], product]}
        } else {
            return {...acc, [key]: [product]}
        }
    },{})   
}