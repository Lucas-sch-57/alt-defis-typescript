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



//Exemple 1 - Should return 15
strLength("Bonjour le monde !")