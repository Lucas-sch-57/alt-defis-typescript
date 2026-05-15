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
 * Vérifie si une chaîne de caractères se termine par un point d'exclamation.
 * 
 * @param sentence - La chaîne de caractères à analyser
 * @returns `true` si la chaîne contient un `!`, `false` sinon
 * 
 * @example
 * isExclamationMarkEnding("Bonjour !")  // true
 * isExclamationMarkEnding("Bonjour")    // false
 */
export const isExclamationMarkEnding = (sentence: string): boolean => {
    const result = sentence.endsWith('!')
    console.log(result)
    return result
}

//Exemple 1 - Should return 15
strLength("Bonjour le monde !")
//Exemple 2 - Should return "Bonjour Jean-Pierre"
firstNameGreeting('jean-pierre')
//Exemple 3 - Should return true 
isExclamationMarkEnding('Wow !')