import { isLowerCaseAsciiLetter, isUpperCaseAsciiLetter } from "../util/asciiHelper"

type VigenereOptions = {
    alwaysIncrementKey: boolean
}


const vigenere = (str: string = '', key: string = '', mode: 'encode' | 'decode', options?: VigenereOptions): string => {
    const defaultOptions = {
        alwaysIncrementKey: false
    }
    const { alwaysIncrementKey } = { ...defaultOptions, ...options }

    const getShiftedLetter = (code: number, shift: number, start: number) => 
        String.fromCharCode(((code - start + (mode === 'encode' ? 1 : -1) * shift + 26) % 26) + start)

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
                return getShiftedLetter(code, shiftArray[i++ % keyLength], 65)
            }
            if (isLowerCaseAsciiLetter(code)) {
                return getShiftedLetter(code, shiftArray[i++ % keyLength], 97)
            }
            if (alwaysIncrementKey) i++
            return char
        })
        .join('')

    return result
}

export const toVigenereCipher = (str: string = '', key: string = '', options?: VigenereOptions) => vigenere(str, key, 'encode', options)

export const fromVigenereCipher = (str: string = '', key: string = '', options?: VigenereOptions) => vigenere(str, key, 'decode', options)


console.log(fromVigenereCipher('Rijvs göpvh', 'key', { alwaysIncrementKey: true }))