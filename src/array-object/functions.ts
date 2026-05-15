import { Book, Employee, Product, Transaction, User } from "./array-object"

/**
 * Filters an array of users by a specific property and value.
 *
 * @param users - The array of users to filter
 * @param key - The property key to filter by
 * @param property2 - The value to match against
 * @returns An array of users whose property matches the given value
 *
 * @example
 * filterByProperty(users, 'active', true)
 * [{ id: 1, name: 'Alice', age: 25, active: true }, ...]
 */
export const filterByProperty = <K extends keyof User>(users: User[], key: K, value: User[K]) => {
    return users.filter((user) => user[key] === value)
}

/**
 * Groups an array of products by a specific property.
 *
 * @param products - The array of products to group
 * @param filter - The property key to group by
 * @returns An object where keys are property values and values are arrays of matching products
 *
 * @example
 * groupBy(products, 'category')
 * { Electronics: [...], Clothing: [...] }
 */
export const groupBy = (products: Product[], filter: keyof Product) => {
    return products.reduce((acc: Record<string, Product[]>, product) => {
        const key = product[filter] as string
        if (!acc[key]) {
            acc[key] = []
        } 
        acc[key].push(product)

        return acc
    }, {})
}

/**
 * Finds the intersection between two arrays of books based on a specific property.
 *
 * @param library1 - The first array of books
 * @param library2 - The second array of books
 * @param property - The property key to compare
 * @returns An array of books from library1 whose property value exists in library2
 *
 * @example
 * findIntersection(library1, library2, 'title')
 * [{ id: 1, title: "1984", author: "Orwell", available: true }]
 */
export const findIntersection = (library1: Book[], library2: Book[], property: keyof Book): Book[] => {
    const library2Values = library2.map(book => book[property])
    return library1.filter((book) => library2Values.includes(book[property]))
}

/**
 * Transforms an array of employees using a provided transformation function.
 *
 * @param employees - The array of employees to transform
 * @param transformer - A function that takes an employee and returns a transformed object
 * @returns An array of transformed objects
 *
 * @example
 * transformArray(employees, emp => ({ id: emp.id, fullName: `${emp.firstName} ${emp.lastName}`, annualSalary: emp.salary * 12 }))
 * [{ id: 1, fullName: 'John Doe', annualSalary: 600000 }, ...]
 */
export const transformArray = <T>(employees: Employee[], transformer: (emp: Employee) => T): T[] => {
    return employees.map(transformer)
}

/**
 * Aggregates data from an array of transactions by summing values grouped by a property.
 *
 * @param transactions - The array of transactions to aggregate
 * @param filter - The property key to group by
 * @param aggregate - The property key whose values will be summed
 * @returns An object where keys are group values and values are the summed aggregates
 *
 * @example
 * aggregateData(transactions, 'category', 'amount')
 * { Food: 150, Income: 75 }
 */
export const aggregateData = (transactions: Transaction[], filter: keyof Transaction, aggregate: keyof Transaction) => {
    return transactions.reduce((acc: Record<string, number>, transac) => {
        const key = transac[filter] as string
        const val = transac[aggregate] as number
        acc[key] = (acc[key] || 0)+val
        return acc
    }, {})
}