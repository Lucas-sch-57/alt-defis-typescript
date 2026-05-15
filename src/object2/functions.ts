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

export const findValueInObject = (config: Object, search: string, path: string[]): string[] | null => {
    for (const [key,value] of Object.entries(config)) {
        if(value === search){
            return [...path, key]
        }
        if(typeof value === 'object' && value !== null) {
            const result = findValueInObject(value, search, [...path,key])
            if(result){
                return result
            }
        }
    }

    return null
}
export const groupByProperty = (students: Array<FlatObject>, groupBy: string) => {
    return students.reduce((acc: Record<string,FlatObject[]>,stud)=>{
        const key = stud[groupBy]
        if(acc[key]) {
            return {
                ...acc,
                [key]: [...acc[key] ,stud]
            }
        } else {
            return {...acc,[key]:[stud]}
        }
    },{})
}

export const validateObject = (userInput: FlatObject, userSchema: FlatObject) => {
    return Object.entries(userSchema).every(([key, val])=> typeof userInput[key] === val)
}

export const compareDifferences = (oldProfile: FlatObject, newProfile: FlatObject) => {
    const oldKeys = Object.keys(oldProfile)
    const newKeys = Object.keys(newProfile)

    const allKeys = new Set<string>([...oldKeys, ...newKeys])
    return Array.from(allKeys).reduce((acc:Record<string,any>, key)=>{
        const oldVal = oldProfile[key]
        const newVal = newProfile[key]

        if(!oldKeys.includes(key)){
            return {...acc,[key]:{type: 'added', new: newVal}}
        } else if(!newKeys.includes(key)){
            return {...acc, [key]: {type: 'removed', old: oldVal}}
        }else if (oldVal !== newVal){
            return {...acc, [key]: {type: 'modified',old:oldVal, new: newVal}}
        }
        return acc
    },{})
}

export const objectToUrlParams1 = (searchParams: Record<string,any>) => {
    return new URLSearchParams(searchParams).toString().replace(/\+/g, '%20')
}

// J'ai chercher les formules sur internet pour être honnête
export const getObjectStats = (datas: NumberObject) => {
    const values = Object.values(datas)
    const total = values.reduce((acc,val)=>acc + val ,0)
    const min = Math.min(...values)
    const max = Math.max(...values)
    const average = total / values.length
    const sortedValues = [...values].sort((a,b)=>a-b);
    const half = Math.floor(sortedValues.length / 2);
    const median = sortedValues.length % 2 === 0 ? (sortedValues[sortedValues.length / 2 - 1] + sortedValues[sortedValues.length / 2]) / 2 : sortedValues[half]
    const variance = values.reduce((acc, val) => acc + Math.pow(val - average, 2), 0) / values.length
    const standardDeviation = parseFloat(Math.sqrt(variance).toFixed(2))
    return {
        basic: {
            min,
            max,
            average,
            total
        },
        advanced: {
            median,
            standardDeviation,
            variance
        }
    }
}