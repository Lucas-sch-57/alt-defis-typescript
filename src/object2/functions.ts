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

export const findKeysByValue = (data: NumberObject, searchVal: number) => {
    const result = Object.entries(data).filter(([,val])=>val === searchVal).map(([key,])=> key)
    console.log(result)
    return result
}

export const createObjectFromArrays = (array1: Array<string>, array2: Array<number>) => {
    const result = Object.fromEntries(array1.map((val,i)=> [val, array2[i]]))
    console.log(result)
}

export const countValues = (data: FlatObject) => {
    const values = Object.values(data)

    const result = values.reduce((acc: Record<string,number>, val)=> {
        return {
            ...acc,
            [val]: acc[val] ? acc[val] + 1 : 1
        }
    }, {})
    console.log(result)
    return result

}

export const extractProperties = (data: FlatObject, infos: ReadonlyArray<string>) => {
    const array = Object.fromEntries(Object.entries(data).filter(([key])=> infos.includes(key)))
    console.log(array)
}

export const sortObjectByValue = (data: NumberObject) => {
    const result = Object.fromEntries(Object.entries(data).sort(([,val1],[,val2])=> val1 - val2))
    console.log(result)
    return result
}
export const findMaxValue = (scores: NumberObject) => {
    const result = Object.entries(scores).reduce((acc, value)=>{
        const [,val]= value
        return acc < val ? val : acc
    }, 0)
    console.log(result)
    return result
}

export const createObjectFromPairs = (products: Array<[string,number]>) => {
    const result = Object.fromEntries(products)
    console.log(result)
    return result
}