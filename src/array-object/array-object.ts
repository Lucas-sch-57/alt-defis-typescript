//Exemple 1 - [{id: 1, name: 'Alice', age: 25, active: true}, {id: 3, name: 'Charlie', age: 35, active: true}]

import {
    aggregateData,
    filterByProperty,
    findIntersection,
    groupBy,
    transformArray,
} from './functions'

export interface User {
    id: number
    name: string
    age: number
    active: boolean
}
// Cas d'usage : Filtrage des utilisateurs actifs dans une application

export const users: User[] = [
    { id: 1, name: 'Alice', age: 25, active: true },
    { id: 2, name: 'Bob', age: 30, active: false },
    { id: 3, name: 'Charlie', age: 35, active: true },
]
console.log(filterByProperty(users, 'active', true))
//Exemple 2 - Should return
// { Electronics: [...], Clothing: [...] }
export interface Product {
    id: number
    name: string
    category: string
    price: number
}

// Cas d'usage : Regroupement de produits par catégorie dans un e-commerce

export const products: Product[] = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 699 },
    { id: 3, name: 'T-shirt', category: 'Clothing', price: 29 },
]

console.log(groupBy(products, 'category'))

///Exemple 3 - Should return [{ id: 1, title: "1984", author: "Orwell", available: true }]
export interface Book {
    id: number
    title: string
    author: string
    available: boolean
}

export const library1: Book[] = [
    { id: 1, title: '1984', author: 'Orwell', available: true },
    { id: 2, title: 'Dune', author: 'Herbert', available: false },
]
export const library2: Book[] = [
    { id: 3, title: '1984', author: 'Orwell', available: true },
    { id: 4, title: 'Foundation', author: 'Asimov', available: true },
]

console.log(findIntersection(library1, library2, 'title'))

//Exemple 4 - Should return [{id: 1, fullName: 'John Doe', annualSalary: 600000}, ...]
export interface Employee {
    id: number
    firstName: string
    lastName: string
    salary: number
}
export const employees: Employee[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', salary: 50000 },
    { id: 2, firstName: 'Jane', lastName: 'Smith', salary: 60000 },
]

const transformer = (emp: Employee) => ({
    id: emp.id,
    fullName: `${emp.firstName} ${emp.lastName}`,
    annualSalary: emp.salary * 12,
})

console.log(transformArray(employees, transformer))

//Exemple 5 - Should return { Food: 150, Income: 75 }
export interface Transaction {
    id: number
    type: 'credit' | 'debit'
    amount: number
    category: string
}

export const transactions: Transaction[] = [
    { id: 1, type: 'debit', amount: 100, category: 'Food' },
    { id: 2, type: 'debit', amount: 50, category: 'Food' },
    { id: 3, type: 'credit', amount: 75, category: 'Income' },
]
console.log(aggregateData(transactions, 'category', 'amount'))
