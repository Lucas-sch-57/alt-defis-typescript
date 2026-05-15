import {
    Difference,
    FlatObject,
    NestedObject,
    NumberObject,
} from './types/object'

/**
 * Returns all values of a numeric object as an array.
 *
 * @param object - The object to extract values from
 * @returns An array of numeric values
 *
 * @example
 * getObjectValues({ a: 1, b: 2, c: 3 })  // [1, 2, 3]
 */
export const getObjectValues = (object: NumberObject): Array<number> => {
    const result = Object.values(object)
    console.log(result)
    return result
}

/**
 * Transforms all values of a numeric object using a provided function.
 *
 * @param object - The object whose values will be transformed
 * @param toDollars - The transformation function applied to each value
 * @returns A new object with transformed values
 *
 * @example
 * transformValues({ price: 100 }, val => val * 1.1)  // { price: 110 }
 */
export const transformValues = (
    object: NumberObject,
    toDollars: (value: number) => number
): NumberObject => {
    const result = Object.fromEntries(
        Object.entries(object).map(([key, value]) => [key, toDollars(value)])
    )
    console.log(result)
    return result
}

/**
 * Merges two objects by summing their common numeric values.
 *
 * @param object1 - The first object
 * @param object2 - The second object
 * @returns A new object with summed values for common keys
 *
 * @example
 * mergeObjects({ january: 1000, february: 1200 }, { january: 800, february: 950 })
 * { january: 1800, february: 2150 }
 */
export const mergeObjects = (object1: NumberObject, object2: NumberObject) => {
    const result = Object.fromEntries(
        Object.entries(object1).map(([key, value]) => [
            key,
            value + object2[key] || 0,
        ])
    )
    console.log(result)
    return result
}

/**
 * Filters an object's entries based on a condition applied to its values.
 *
 * @param inventory - The object to filter
 * @param condition - A function that returns `true` for values to keep
 * @returns A new object containing only entries that satisfy the condition
 *
 * @example
 * filterObject({ laptop: 0, mouse: 5, keyboard: 0 }, stock => stock === 0)
 * { laptop: 0, keyboard: 0 }
 */
export const filterObject = (
    inventory: NumberObject,
    condition: (value: number) => boolean
) => {
    const result = Object.fromEntries(
        Object.entries(inventory).filter(([, value]) => condition(value))
    )
    console.log(result)
    return result
}

/**
 * Converts a flat object with dot-separated keys into a nested object.
 *
 * @param config - The flat object to convert
 * @returns A nested object built from the dot-separated keys
 *
 * @example
 * flatToNested({ 'app.name': 'MyApp', 'database.host': 'localhost' })
 * { app: { name: 'MyApp' }, database: { host: 'localhost' } }
 */
export const flatToNested = (config: FlatObject) => {
    const result = Object.entries(config).reduce(
        (acc: Record<string, any>, [key, value]) => {
            const [parent, child] = key.split('.')
            if (!acc[parent]) {
                acc[parent] = {}
            }
            acc[parent][child] = value

            return acc
        },
        {}
    )
    console.log(result)
    return result
}

/**
 * Finds all keys in an object that match a specific value.
 *
 * @param data - The object to search through
 * @param searchVal - The value to search for
 * @returns An array of keys whose value matches the search value
 *
 * @example
 * findKeysByValue({ laptop: 0, mouse: 5, keyboard: 0 }, 0)  // ["laptop", "keyboard"]
 */
export const findKeysByValue = (data: NumberObject, searchVal: number) => {
    const result = Object.entries(data)
        .filter(([, val]) => val === searchVal)
        .map(([key]) => key)
    console.log(result)
    return result
}

/**
 * Creates an object from two arrays, using the first as keys and the second as values.
 *
 * @param array1 - The array of keys
 * @param array2 - The array of values
 * @returns A new object built from the two arrays
 *
 * @example
 * createObjectFromArrays(["Alice", "Bob"], [100, 85])  // { Alice: 100, Bob: 85 }
 */
export const createObjectFromArrays = (keys: string[], values: number[]) => {
    const result = Object.fromEntries(keys.map((val, i) => [val, values[i]]))
    console.log(result)
    return result
}

/**
 * Counts the number of occurrences of each value in an object.
 *
 * @param data - The object to analyze
 * @returns A new object where keys are the original values and values are their occurrence counts
 *
 * @example
 * countValues({ order1: "pending", order2: "delivered", order3: "pending" })
 *  { pending: 2, delivered: 1 }
 */
export const countValues = (data: FlatObject) => {
    const values = Object.values(data)

    const result = values.reduce((acc: Record<string, number>, val) => {
        acc[val] = (acc[val] || 0) + 1
        return acc
    }, {})
    console.log(result)
    return result
}

/**
 * Extracts specific properties from an object based on an array of keys.
 *
 * @param data - The object to extract properties from
 * @param infos - A readonly array of keys to extract
 * @returns A new object containing only the specified keys
 *
 * @example
 * extractProperties({ name: "Jean", email: "jean@email.com", age: 35 }, ["name", "age"])
 * { name: "Jean", age: 35 }
 */
export const extractProperties = <
    T extends Record<string, unknown>,
    K extends keyof T,
>(
    data: T,
    infos: readonly K[]
): Pick<T, K> => {
    const array = Object.fromEntries(
        Object.entries(data).filter(([key]) => infos.includes(key as K))
    ) as Pick<T, K>
    console.log(array)
    return array
}

/**
 * Sorts an object's properties by their numeric values in ascending order.
 *
 * @param data - The object to sort
 * @returns A new object with properties sorted by value
 *
 * @example
 * sortObjectByValue({ Alice: 85, Bob: 92, Charlie: 78 })
 * { Charlie: 78, Alice: 85, Bob: 92 }
 */
export const sortObjectByValue = (data: NumberObject) => {
    const result = Object.fromEntries(
        Object.entries(data).sort(([, val1], [, val2]) => val1 - val2)
    )
    console.log(result)
    return result
}

/**
 * Finds the maximum value in a numeric object.
 *
 * @param scores - The object to search through
 * @returns The maximum numeric value found in the object
 *
 * @example
 * findMaxValue({ Alice: 85, Bob: 92, Charlie: 78 })  // 92
 */
export const findMaxValue = (scores: NumberObject) => {
    const values = Object.values(scores)

    if (values.length === 0) {
        throw new Error('Cannot be empty')
    }
    const result = Math.max(...values)
    console.log(result)
    return result
}

/**
 * Creates an object from an array of key-value pairs.
 *
 * @param products - An array of [key, value] tuples
 * @returns A new object built from the key-value pairs
 *
 * @example
 * createObjectFromPairs([["pommes", 2.5], ["bananes", 1.8]])
 * { pommes: 2.5, bananes: 1.8 }
 */
export const createObjectFromPairs = (products: Array<[string, number]>) => {
    const result = Object.fromEntries(products)
    console.log(result)
    return result
}

/**
 * Recursively searches for a value in a nested object and returns its path.
 *
 * @param config - The nested object to search through
 * @param search - The value to search for
 * @param path - The current path accumulator (used for recursion)
 * @returns An array of keys representing the path to the value, or `null` if not found
 *
 * @example
 * findValueInObject({ app: { settings: { theme: "dark" } } }, "dark", [])
 * ["app", "settings", "theme"]
 */
export const findValueInObject = (
    config: NestedObject,
    search: string,
    path: string[]
): string[] | null => {
    for (const [key, value] of Object.entries(config)) {
        if (value === search) {
            return [...path, key]
        }
        if (
            typeof value === 'object' &&
            value !== null &&
            !Array.isArray(value)
        ) {
            const result = findValueInObject(value as NestedObject, search, [
                ...path,
                key,
            ])
            if (result) {
                return result
            }
        }
    }
    return null
}

/**
 * Groups an array of objects by a specific property value.
 *
 * @param students - The array of objects to group
 * @param groupBy - The property key to group by
 * @returns An object where keys are property values and values are arrays of matching objects
 *
 * @example
 * groupByProperty([{ name: "Alice", level: "Débutant" }, { name: "Bob", level: "Avancé" }], "level")
 * { "Débutant": [{ name: "Alice", level: "Débutant" }], "Avancé": [{ name: "Bob", level: "Avancé" }] }
 */
export const groupByProperty = (students: FlatObject[], groupBy: string) => {
    return students.reduce((acc: Record<string, FlatObject[]>, stud) => {
        const key = stud[groupBy] as string
        if (!acc[key]) {
            acc[key] = []
        }

        acc[key].push(stud)
        return acc
    }, {})
}

/**
 * Validates an object against a schema by checking the type of each property.
 *
 * @param userInput - The object to validate
 * @param userSchema - The schema defining expected types for each key
 * @returns `true` if all properties match the schema types, `false` otherwise
 *
 * @example
 * validateObject({ name: "Marie", age: 25 }, { name: "string", age: "number" })  // true
 * validateObject({ name: "Marie", age: "25" }, { name: "string", age: "number" }) // false
 */
export const validateObject = (
    userInput: FlatObject,
    userSchema: FlatObject
) => {
    return Object.entries(userSchema).every(
        ([key, val]) => typeof userInput[key] === val
    )
}

/**
 * Compares two objects and returns the differences between them.
 *
 * @param oldProfile - The original object
 * @param newProfile - The updated object
 * @returns An object describing added, removed, or modified properties
 *
 * @example
 * compareDifferences({ name: "Jean", age: 30 }, { name: "Jean", age: 31, phone: "0123456789" })
 *  { age: { type: "modified", old: 30, new: 31 }, phone: { type: "added", new: "0123456789" } }
 */
export const compareDifferences = (
    oldProfile: FlatObject,
    newProfile: FlatObject
) => {
    const oldKeys = Object.keys(oldProfile)
    const newKeys = Object.keys(newProfile)

    const allKeys = new Set<string>([...oldKeys, ...newKeys])
    return Array.from(allKeys).reduce(
        (acc: Record<string, Difference>, key) => {
            const oldValue = oldProfile[key]
            const newValue = newProfile[key]

            if (!oldKeys.includes(key)) {
                acc[key] = {
                    type: 'added',
                    new: newValue,
                }
            } else if (!newKeys.includes(key)) {
                acc[key] = {
                    type: 'removed',
                    old: oldValue,
                }
            } else if (oldValue !== newValue) {
                acc[key] = {
                    type: 'modified',
                    old: oldValue,
                    new: newValue,
                }
            }

            return acc
        },
        {}
    )
}

/**
 * Converts an object into a URL query string.
 *
 * @param searchParams - The object to convert
 * @returns A URL-encoded query string with spaces encoded as `%20`
 *
 * @example
 * objectToUrlParams1({ query: "ordinateur portable", maxPrice: 1000 })
 * "query=ordinateur%20portable&maxPrice=1000"
 */
export const objectToUrlParams1 = (
    searchParams: Record<string, string | number | boolean>
): string => {
    return new URLSearchParams(
        Object.entries(searchParams).map(([key, value]) => [key, String(value)])
    )
        .toString()
        .replace(/\+/g, '%20')
}

/**
 * Generates a statistical summary of an object containing numeric values.
 *
 * @param datas - The object containing numeric values to analyze
 * @returns An object containing basic and advanced statistics
 *
 * @example
 * getObjectStats({ january: 1000, february: 1200, march: 900, april: 1500 })
 *{
 * basic: { min: 900, max: 1500, average: 1150, total: 4600 },
 *    advanced: { median: 1100, variance: 52500, standardDeviation: 229.13 }
 * }
 */
export const getObjectStats = (datas: NumberObject) => {
    const values = Object.values(datas)
    const total = values.reduce((acc, val) => acc + val, 0)
    const min = Math.min(...values)
    const max = Math.max(...values)
    const average = total / values.length
    const sortedValues = [...values].sort((a, b) => a - b)
    const half = Math.floor(sortedValues.length / 2)
    const median =
        sortedValues.length % 2 === 0
            ? (sortedValues[sortedValues.length / 2 - 1] +
                  sortedValues[sortedValues.length / 2]) /
              2
            : sortedValues[half]
    const variance =
        values.reduce((acc, val) => acc + Math.pow(val - average, 2), 0) /
        values.length
    const standardDeviation = parseFloat(Math.sqrt(variance).toFixed(2))
    return {
        basic: { min, max, average, total },
        advanced: { median, variance, standardDeviation },
    }
}
