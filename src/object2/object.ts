import { getObjectValues, countValues,createObjectFromArrays,extractProperties,filterObject,findKeysByValue,flatToNested1,mergeObjects,sortObjectByValue,transformValues, findMaxValue, createObjectFromPairs, findValueInObject, groupByProperty, validateObject } from "./functions";
import { NumberObject } from "./types/object";

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

//Exemple 6 - Should return ["laptop", "keyboard"]
const productStock = {
    laptop: 0,
    mouse: 5,
    keyboard: 0,
    monitor: 3
};

findKeysByValue(productStock, 0)
//Exemple 7 - SHould return { Alice: 100, Bob: 85, Charlie: 90 }
const playerNames = ["Alice", "Bob", "Charlie"];
const scores2 = [100, 85, 90];
createObjectFromArrays(playerNames, scores2)

//Exemple 8 - SHould return { pending: 3, delivered: 1, cancelled: 1 }
const orderStatuses = {
    order1: "pending",
    order2: "delivered",
    order3: "pending",
    order4: "cancelled",
    order5: "pending"
};
countValues(orderStatuses)
//Exemple 9 - Should return { name: "Jean Martin", age: 35 }
const userProfile = {
    name: "Jean Martin",
    email: "jean@email.com",
    password: "secret123",
    age: 35,
    address: "123 rue Principal"
};

const publicInfo = ["name", "age"] as const;
extractProperties(userProfile, publicInfo);

//Exemple 10 - SHould return { Charlie: 78, Alice: 85, Bob: 92, David: 95 }
const playerScores = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
    David: 95
};

sortObjectByValue(playerScores)
//Exemple 11 - Should return 1020
const gameScores = {
    level1: 850,
    level2: 920,
    level3: 880,
    level4: 1020
};
findMaxValue(gameScores)

//Exemple 12 - Should return { pommes: 2.5, bananes: 1.8, oranges: 2.2 }
const productPairs: [string,number][] = [
    ["pommes", 2.5],
    ["bananes", 1.8],
    ["oranges", 2.2]
];
createObjectFromPairs(productPairs)

//Exemple 13 - Should return ["app", "settings", "theme"]
const config = {
    app: {
        name: "MonApp",
        settings: {
            theme: "dark",
            notifications: {
                email: true,
                push: false
            }
        }
    }
};
console.log(findValueInObject(config,'dark', []))
const students = [
    { name: "Alice", level: "Débutant" },
    { name: "Bob", level: "Intermédiaire" },
    { name: "Charlie", level: "Débutant" },
    { name: "David", level: "Avancé" }
];
//Exemple 14. - Should return 
// {
//   "Débutant": [
//     { name: "Alice", level: "Débutant" },
//     { name: "Charlie", level: "Débutant" }
//   ],
//   "Intermédiaire": [{ name: "Bob", level: "Intermédiaire" }],
//   "Avancé": [{ name: "David", level: "Avancé" }]
// }
console.log(groupByProperty(students, 'level'))

//Exemple 15 - Should return true

// Cas d'usage : Validation d'un formulaire utilisateur

const userSchema = {
    name: "string",
    age: "number",
    email: "string"
};

const userInput = {
    name: "Marie",
    age: 25,
    email: "marie@email.com"
};

console.log(validateObject(userInput, userSchema)); 