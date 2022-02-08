export const isUpperCaseAsciiLetter = (code: number): boolean => code >= 65 && code <= 90

export const isLowerCaseAsciiLetter = (code: number): boolean => code >= 97 && code <= 122

export const isAsciiLetter = (code: number): boolean => isUpperCaseAsciiLetter(code) || isLowerCaseAsciiLetter(code)
