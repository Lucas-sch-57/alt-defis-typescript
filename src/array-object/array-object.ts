//Exemple 1 - [{id: 1, name: 'Alice', age: 25, active: true}, {id: 3, name: 'Charlie', age: 35, active: true}]

import { filterByProperty } from "./functions";

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