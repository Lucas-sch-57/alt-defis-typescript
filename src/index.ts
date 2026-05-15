import {
    strLength,
    firstNameGreeting,
    isExclamationMarkEnding,
    reverseWord,
    charsOccur,
    toCamelCase,
    vowelsCount,
    minMajAlternate,
    removeDuplicate,
    extractInitials,
    maskString,
    isPalindrome,
    longestSequence,
    truncate,
    capitalizeWords,
} from './string/string'

import {
    filterByProperty,
    groupBy,
    findIntersection,
    transformArray,
    aggregateData,
} from './array-object/functions'

import {
    getObjectValues,
    transformValues,
    mergeObjects,
    filterObject,
    flatToNested,
    findKeysByValue,
    createObjectFromArrays,
    countValues,
    extractProperties,
    sortObjectByValue,
    findMaxValue,
    createObjectFromPairs,
    findValueInObject,
    groupByProperty,
    validateObject,
    compareDifferences,
    objectToUrlParams1,
    getObjectStats,
} from './object2/functions'

import {
    users,
    products,
    library1,
    library2,
    employees,
    transactions,
} from './array-object/array-object'

const separator = (title: string): void => {
    console.log('\n' + '='.repeat(60))
    console.log(`📌 ${title}`)
    console.log('='.repeat(60))
}

const printResult = (label: string, result: unknown): void => {
    console.log(`\n➡️  ${label}`)
    console.log(result)
}

console.clear()
console.log('🚀 TypeScript Utility Functions Demo')
console.log('='.repeat(60))

// =====================================================
// STRING FUNCTIONS
// =====================================================

separator('STRING FUNCTIONS')

printResult('strLength', strLength('Bonjour le monde !'))

printResult('firstNameGreeting', firstNameGreeting('jean-pierre'))

printResult('isExclamationMarkEnding', isExclamationMarkEnding('Wow !'))

printResult('reverseWord', reverseWord('Je mange une pomme'))

printResult('charsOccur', charsOccur("Bonjour je m'appelle Lucas", 'o'))

printResult('toCamelCase', toCamelCase('user_first_name'))

printResult('vowelsCount', vowelsCount("Bonjour je m'appelle Lucas"))

printResult(
    'minMajAlternate',
    minMajAlternate('naonzodazoiedjaoejoiajeojaejaoejoajo')
)

printResult(
    'removeDuplicate',
    removeDuplicate("Bonjouuuur !!! J'ai besoiiiin d'aide....")
)

printResult('extractInitials', extractInitials('Lucas Schiltz'))

printResult('maskString', maskString('1234567890123456', 4))

printResult('isPalindrome', isPalindrome('Eh ! ça va la vache ?'))

printResult('longestSequence', longestSequence('aaabbbbbcccc'))

printResult(
    'truncate',
    truncate("Ceci est une très longue description d'un produit", 20)
)

printResult('capitalizeWords', capitalizeWords('bienvenue sur notre site web'))

// =====================================================
// ARRAY / OBJECT FUNCTIONS
// =====================================================

separator('ARRAY / OBJECT FUNCTIONS')

printResult('filterByProperty', filterByProperty(users, 'active', true))

printResult('groupBy', groupBy(products, 'category'))

printResult('findIntersection', findIntersection(library1, library2, 'title'))

printResult(
    'transformArray',
    transformArray(employees, (employee) => ({
        id: employee.id,
        fullName: `${employee.firstName} ${employee.lastName}`,
        annualSalary: employee.salary * 12,
    }))
)

printResult('aggregateData', aggregateData(transactions, 'category', 'amount'))

// =====================================================
// OBJECT FUNCTIONS
// =====================================================

separator('OBJECT FUNCTIONS')

printResult('getObjectValues', getObjectValues({ a: 1, b: 2, c: 3 }))

printResult(
    'transformValues',
    transformValues({ price: 100 }, (value) => value * 1.1)
)

printResult(
    'mergeObjects',
    mergeObjects(
        { january: 1000, february: 1200 },
        { january: 800, february: 950 }
    )
)

printResult(
    'filterObject',
    filterObject({ laptop: 0, mouse: 5, keyboard: 0 }, (stock) => stock === 0)
)

printResult(
    'flatToNested',
    flatToNested({
        'app.name': 'MyApp',
        'database.host': 'localhost',
    })
)

printResult(
    'findKeysByValue',
    findKeysByValue({ laptop: 0, mouse: 5, keyboard: 0 }, 0)
)

printResult(
    'createObjectFromArrays',
    createObjectFromArrays(['Alice', 'Bob'], [100, 85])
)

printResult(
    'countValues',
    countValues({
        order1: 'pending',
        order2: 'delivered',
        order3: 'pending',
    })
)

printResult(
    'extractProperties',
    extractProperties(
        {
            name: 'Jean',
            email: 'jean@email.com',
            age: 35,
        },
        ['name', 'age']
    )
)

printResult(
    'sortObjectByValue',
    sortObjectByValue({
        Alice: 85,
        Bob: 92,
        Charlie: 78,
    })
)

printResult(
    'findMaxValue',
    findMaxValue({
        Alice: 85,
        Bob: 92,
        Charlie: 78,
    })
)

printResult(
    'createObjectFromPairs',
    createObjectFromPairs([
        ['pommes', 2.5],
        ['bananes', 1.8],
    ])
)

printResult(
    'findValueInObject',
    findValueInObject(
        {
            app: {
                settings: {
                    theme: 'dark',
                },
            },
        },
        'dark',
        []
    )
)

printResult(
    'groupByProperty',
    groupByProperty(
        [
            { name: 'Alice', level: 'Débutant' },
            { name: 'Bob', level: 'Avancé' },
        ],
        'level'
    )
)

printResult(
    'validateObject',
    validateObject(
        { name: 'Marie', age: 25 },
        { name: 'string', age: 'number' }
    )
)

printResult(
    'compareDifferences',
    compareDifferences(
        { name: 'Jean', age: 30 },
        {
            name: 'Jean',
            age: 31,
            phone: '0123456789',
        }
    )
)

printResult(
    'objectToUrlParams',
    objectToUrlParams1({
        query: 'ordinateur portable',
        maxPrice: 1000,
        available: true,
    })
)

printResult(
    'getObjectStats',
    getObjectStats({
        january: 1000,
        february: 1200,
        march: 900,
        april: 1500,
    })
)

console.log('\n✨ End of demo')
