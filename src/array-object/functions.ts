import { Book, Product, User } from "./array-object"

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

export const findIntersection = (library1: Book[], library2: Book[], property: keyof Book): Book[] => {
    const library2Values = library2.map(book => book[property])
    return library1.filter((book)=> library2Values.includes(book[property]))
}