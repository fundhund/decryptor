import { isLowerCaseAsciiLetter, isUpperCaseAsciiLetter } from "../util/asciiHelper"

const vigenere = (str: string = '', key: string = '', mode: 'encode' | 'decode'): string => {
    const shiftArray: number[] = key.split('')
        .map(char => {
            const code = char.charCodeAt(0)
            if (isUpperCaseAsciiLetter(code)) return code - 65
            if (isLowerCaseAsciiLetter(code)) return code - 97
            return -1
        })
        .filter(code => code !== -1)
    
    const keyLength = shiftArray.length
    let i = 0

    const result = str.split('')
        .map(char => {
            const code = char.charCodeAt(0)
            if (isUpperCaseAsciiLetter(code)) {
                return String.fromCharCode(((code - 65 + (mode === 'encode' ? 1 : -1) * shiftArray[i++ % keyLength]) % 26) + 65)
            }
            if (isLowerCaseAsciiLetter(code)) {
                return String.fromCharCode(((code - 97 + (mode === 'encode' ? 1 : -1) * shiftArray[i++ % keyLength]) % 26) + 97)
            }
            return char
        })
        .join('')

    return result
}

export const toVigenereCipher = (str: string = '', key: string = '') => vigenere(str, key, 'encode')

export const fromVigenereCipher = (str: string = '', key: string = '') => vigenere(str, key, 'decode')

console.log(toVigenereCipher('teöst', 'b'))
console.log(fromVigenereCipher('uftu', 'b'))