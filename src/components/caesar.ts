import { isLowerCaseAsciiLetter, isUpperCaseAsciiLetter } from "../util/asciiHelper"

export type CaesarBruteForceResult = {
    [key: number]: string
}

export const toCaesarCipher = (str: string = '', shift: number = 0): string => {
    if (shift === 0) return str
    if (shift < 0) return toCaesarCipher(str, shift + Math.ceil(-shift / 26) * 26)

    return str
        .split('')
        .map((char) => {
            const code = char.charCodeAt(0)
            if (isUpperCaseAsciiLetter(code)) return String.fromCharCode(((code - 65 + shift + 26) % 26) + 65)
            if (isLowerCaseAsciiLetter(code)) return String.fromCharCode(((code - 97 + shift + 26) % 26) + 97)
            return char
        })
        .join('')
}

export const toCaesarCipherAll = (str: string = ''): CaesarBruteForceResult => {
    if (!str) return {}
    return { ...Array.from({ length: 26 }, (_, i) => toCaesarCipher(str, i)) }
}

export const fromCaesarCipher = (str: string = '', shift: number = 0): string => toCaesarCipher(str, -shift)

export const fromCaesarCipherAll = (str: string = ''): CaesarBruteForceResult => ({
    ...Array.from({ length: 26 }, (_, i) => toCaesarCipher(str, 26 - i)),
})
