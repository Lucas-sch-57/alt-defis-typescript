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

//Exemple 1 - Should return 15
strLength("Bonjour le monde !")
//Exemple 2 - Should return "Bonjour Jean-Pierre"
firstNameGreeting('jean-pierre')
//Exemple 3 - Should return true 
isExclamationMarkEnding('Wow !')
//Exemple 4 - Should return pomme une mange Je
reverseWord("Je mange une pomme")