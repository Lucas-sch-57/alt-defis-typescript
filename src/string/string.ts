/**
 * Treat a string to remove whitespace and return the number of chars
 * @param string - The string treat
 * @returns Should return the number of chars in the string without whitespace
 */
export const strLength = (string: string): number => {  
    const result = string.replace(/\s/g,"").length
    console.log(result)
    return result
}

/**
 * Replace first letters of a firstName to put them in upperCase on return a greeting message
 * Split composed firstName and join it again for the result
 * @param firstName - The firstname to return
 * @returns - A greeting message with uppercase first letters of the firstname
 */
export const firstNameGreeting = (firstName: string): string => {
    //Récupère les parties du prénom, si prénom composé
    const result = firstName.split('-').map((split)=> split.charAt(0).toUpperCase() + split.slice(1).toLowerCase()).join('-')
    console.log(`Bonjour ${result}`)
    return `Bonjour ${result}`
}
/**
 * Checks whether a string contains an exclamation mark.
 *
 * @param sentence - The string to analyze
 * @returns `true` if the string contains a `!`, `false` otherwise
 *
 * @example
 * isExclamationMarkEnding("Hello!")  // true
 * isExclamationMarkEnding("Hello")   // false
 */
export const isExclamationMarkEnding = (sentence: string): boolean => {
    const result = sentence.endsWith('!')
    console.log(result)
    return result
}
/**
 * Reverses the order of words in a string.
 *
 * @param sentence - The string to reverse
 * @returns The string with words in reverse order
 *
 * @example
 * reverseWord("Hello world")      // "world Hello"
 * reverseWord("one two three")    // "three two one"
 */
export const reverseWord = (sentence: string): string => {
    const result = sentence.split(/\s/).reverse().join(" ")
    console.log(result)
    return result
}
/**
 * Counts the number of occurrences of a character in a string.
 *
 * @param sentence - The string to analyze
 * @param char - The character to search for
 * @returns The number of times the character appears in the string
 *
 * @example
 * charsOccur("Hello world", "l")  // 3
 * charsOccur("Hello world", "o")  // 2
 */
export const charsOccur = (sentence: string, char: string): number => {
    const result = sentence.split("").filter((split)=>split === char).length
    console.log(result)
    return result
}
/**
 * Converts a snake_case string to camelCase.
 *
 * @param data - The snake_case string to convert
 * @returns The string converted to camelCase
 *
 * @example
 * toCamelCase("hello_world")       // "helloWorld"
 * toCamelCase("my_variable_name")  // "myVariableName"
 * toCamelCase("hello")             // "hello"
 */
export const toCamelCase = (data: string): string => {
    const splitted = data.split('_').map((split, i)=> i===0?split.toLowerCase() : split.charAt(0).toUpperCase() + split.slice(1).toLowerCase()).join('')
    console.log(splitted)
    return splitted
} 
/**
 * Counts the number of vowels in a string.
 *
 * @param sentence - The string to analyze
 * @returns The number of vowels found in the string, or 0 if none
 *
 * @example
 * vowelsCount("Hello world")  // 3
 * vowelsCount("rhythm")       // 0
 */
export const vowelsCount = (sentence: string) : number | undefined => {
    const regex = /[aeiouAEIOU]/g
    const matches = sentence.match(regex)
    const result = matches !== null ? matches.length : 0
    console.log(result)
    return result
}
/**
 * Alternates the case of each character in a string,
 * starting with uppercase for the first character.
 *
 * @param data - The string to transform
 * @returns The string with alternating uppercase and lowercase characters
 *
 * @example
 * minMajAlternate("hello")        // "HeLlO"
 * minMajAlternate("hello world")  // "HeLlO WoRlD"
 */
export const minMajAlternate = (data: string) : string => {
    const result = data.split('').map((split,i)=> i % 2 === 0 ? split.toUpperCase() : split.toLowerCase()).join('')
    console.log(result)
    return result
}
/**
 * Removes consecutive duplicate characters from a string.
 *
 * @param data - The string to process
 * @returns The string with consecutive duplicate characters removed
 *
 * @example
 * removeDuplicate("helllo worrld")  // "helo world"
 * removeDuplicate("aabbcc")         // "abc"
 * removeDuplicate("hello")          // "helo"
 */
export const removeDuplicate = (data: string)  => {
    const splitted = data.split('')
    const result = splitted.filter((char,i,arr)=>{
        if(i === 0 ){
            return char
        }
        return char !== arr[i-1]
    })
    console.log(result.join(''))
    return result
}
/**
 * Extracts the initials from a full name.
 *
 * @param fullName - The full name to extract initials from
 * @returns The initials in uppercase
 *
 * @example
 * extractInitials("Jean Pierre Dupont")  // "JPD"
 * extractInitials("john doe")            // "JD"
 */
export const extractInitials = (fullName: string) => {
    const result =  fullName.split(/\s+/).filter(Boolean).map((split)=> split.slice(0,1).toUpperCase()).join('')
    console.log(result)
    return result
}
/**
 * Returns the last N characters of a string, masking the rest.
 *
 * @param string - The string to mask
 * @param threshold - The number of characters to keep visible at the end
 * @returns The last N characters of the string
 *
 * @example
 * maskString("1234567890123456", 4)  // "3456"
 * maskString("hello", 2)             // "lo"
 */
export const maskString = (string: string, threshold: number) => {
    const result = string.slice(string.length - threshold)
    console.log(result)
    return result
}
/**
 * Checks whether a string is a palindrome,
 * ignoring spaces, punctuation, accents and case.
 *
 * @param sentence - The string to check
 * @returns `true` if the string is a palindrome, `false` otherwise
 *
 * @example
 * isPalindrome("Eh ! ça va la vache ?")  // true
 * isPalindrome("racecar")                // true
 * isPalindrome("hello")                  // false
 */
export const isPalindrome = (sentence: string) : boolean => {
    const clean = sentence.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '')
    const result = clean === clean.split('').reverse().join('')
    console.log(result)
    return result
}
export const longestSequence = (input: string) : string | undefined => {
    const regex = /(.)\1*/g
    const array = input.match(regex)
    const result = array?.reduce((longest, curr)=>{
        return curr.length > longest.length ? curr : longest
    })
    console.log(result)
    return result
}
//Exemple 1 - Should return 15
strLength("Bonjour le monde !")
//Exemple 2 - Should return "Bonjour Jean-Pierre"
firstNameGreeting('jean-pierre')
//Exemple 3 - Should return true 
isExclamationMarkEnding('Wow !')
//Exemple 4 - Should return pomme une mange Je
reverseWord("Je mange une pomme")
//Exmple 5 - SHould return 2
charsOccur("Bonjour je m'apelle Lucas", "o")
//Exemple 6 - Should return userFirstName
toCamelCase('user_first_name')
//Exemple 7 - Should return 9
vowelsCount("Bonjour je m'apelle Lucas")
//Exemple 8 - Should return NaOnZoDaZoIeDjAoEjOiAjEoJaEjAoEjOaJo
minMajAlternate("naonzodazoiedjaoejoiajeojaejaoejoajo")
//Exemple 9 - Should return Bonjour ! J'ai besoin d'aide.
removeDuplicate("Bonjouuuur !!! J'ai besoiiiin d'aide....")
//Exemple 10 - Should return LS
extractInitials("Lucas Schiltz")
//Exemple 11 - Should return 3456
maskString("1234567890123456",4)
//Exemple 12 - Should return true
isPalindrome("Eh ! ça va la vache ?")
//Exemple 13 - Should return "bbbbb"
longestSequence("aaabbbbbcccc")
