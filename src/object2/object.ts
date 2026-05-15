import {  FlatObject, NumberObject } from "./types/object";

export const getObjectValues = (object:NumberObject ): Array<number> => {
    const result = Object.values(object)
    console.log(result)
    return result
}

export const transformValues = (object: NumberObject, toDollars: Function): NumberObject=> {
    const result =Object.fromEntries(Object.entries(object).map(([key,value])=> [key, toDollars(value)]))
    console.log(result)
    return result
}

export const mergeObjects = (object1: NumberObject, object2: NumberObject) => {
    const result = Object.fromEntries(Object.entries(object1).map(([key,value])=> [key, value + object2[key]]))
    console.log(result)
    return result   
}

export const filterObject = (inventory: NumberObject, condition: (value: number) => boolean) => {
    const result = Object.fromEntries(Object.entries(inventory).filter(([, value])=>condition(value)))
    console.log(result)
    return result

} 

export const flatToNested1 = (config: FlatObject )=> {
    const result = Object.entries(config).reduce((acc: Record<string,any>,[key,value])=>{
        const [parent, child] = key.split('.')
        return    {
            ...acc,
            [parent]: {
                ...acc[parent],
                [child]: value
            }
        }
   
    }, {})
    console.log(result)
    return result
}

//Example 1 - Should return [100,85,95]
const scores: NumberObject = {
    level1: 100,
    level2: 85,
    level3: 95
}
getObjectValues(scores)

//Exemple 2 - Should return { book: 22, pen: 5.5, notebook: 11 }
const pricesInEuros = {
    book: 20,
    pen: 5,
    notebook: 10
};
const toDollars = (euros: number) => euros*1.1

transformValues(pricesInEuros, toDollars)

//Exemple 3 - Should return { january: 1800, february: 2150, march: 2000 }
const store1Sales = { january: 1000, february: 1200, march: 900 };
const store2Sales = { january: 800, february: 950, march: 1100 };
mergeObjects(store1Sales,store2Sales)

//Exemple 4 - Should return {laptop: 0, tablet: 0}
const inventory = {
    laptop: 0,
    smartphone: 5,
    tablet: 0,
    headphones: 8
};
filterObject(inventory, stock => stock === 0);
//Exemple 5 - SHould return {
//     app: { name: 'MyApp', version: '1.0.0' },
//     database: { host: 'localhost', port: 5432 }
// }
const flatConfig = {
    'app.name': 'MyApp',
    'app.version': '1.0.0',
    'database.host': 'localhost',
    'database.port': 5432
};
flatToNested1(flatConfig)