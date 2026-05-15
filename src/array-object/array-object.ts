//Exemple 1 - [{id: 1, name: 'Alice', age: 25, active: true}, {id: 3, name: 'Charlie', age: 35, active: true}]

import { filterByProperty, findIntersection, groupBy } from "./functions";

export interface User {
    id: number;
    name: string;
    age: number;
    active: boolean;
}
// Cas d'usage : Filtrage des utilisateurs actifs dans une application

const users: User[] = [
    { id: 1, name: 'Alice', age: 25, active: true },
    { id: 2, name: 'Bob', age: 30, active: false },
    { id: 3, name: 'Charlie', age: 35, active: true }
];
console.log(filterByProperty(users, 'active', true));
//Exemple 2 - Should return 
// { Electronics: [...], Clothing: [...] }
export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
}

// Cas d'usage : Regroupement de produits par catégorie dans un e-commerce

const products: Product[] = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 699 },
    { id: 3, name: 'T-shirt', category: 'Clothing', price: 29 }
];

console.log(groupBy(products, 'category'))

///Exemple 3 - Should return [{ id: 1, title: "1984", author: "Orwell", available: true }]
export interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
}

const library1: Book[] = [
    { id: 1, title: "1984", author: "Orwell", available: true },
    { id: 2, title: "Dune", author: "Herbert", available: false }
];
const library2: Book[] = [
    { id: 3, title: "1984", author: "Orwell", available: true },
    { id: 4, title: "Foundation", author: "Asimov", available: true }
];

console.log(findIntersection(library1, library2, 'title'));