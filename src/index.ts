export const toBase64 = btoa

export const fromBase64 = atob

export const toCaesarCipher = (str: string = '', shift: number = 0): string => {
  if (shift === 0) return str
  if (shift < 0) return toCaesarCipher(str, shift + Math.ceil(-shift / 26) * 26)

  return str
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0)
      if (code >= 65 && code <= 90) return String.fromCharCode(((code - 65 + shift) % 26) + 65)
      if (code >= 97 && code <= 122) return String.fromCharCode(((code - 97 + shift) % 26) + 97)
      return char
    })
    .join('')
}

export type CaesarBruteForceResult = {
  [key: number]: string
}

export const toCaesarCipherAll = (str: string = ''): CaesarBruteForceResult => {
  if (!str) return {}
  return { ...Array.from({ length: 26 }, (_, i) => toCaesarCipher(str, i)) }
}

export const fromCaesarCipher = (str: string = '', shift: number = 0): string => toCaesarCipher(str, -shift)

export const fromCaesarCipherAll = (str: string = ''): CaesarBruteForceResult => ({
  ...Array.from({ length: 26 }, (_, i) => toCaesarCipher(str, 26 - i)),
})

export type CounterOptions = {
  caseSensitive?: boolean
  pattern?: RegExp
}

export type Counter = {
  [key: string]: number
}

export const count = (str: string = '', options?: CounterOptions): Counter => {
  const defaultOptions = {
    caseSensitive: false,
    pattern: /\p{Letter}/u,
  }

  const { caseSensitive, pattern } = { ...defaultOptions, ...options }

  const counter: Counter = {}
  str.split('').forEach((char) => {
    if (char.match(pattern)) {
      const key = caseSensitive ? char : char.toLowerCase()
      counter[key] = key in counter ? counter[key] + 1 : 1
    }
  })
  return counter
}

export const isAnagram = (str1: string = '', str2: string = ''): boolean => {
  const counter1 = count(str1)
  const counter2 = count(str2)
  for (const key in counter1) {
    if (!(counter1[key] === counter2[key])) {
      return false
    }
  }
  return true
}
