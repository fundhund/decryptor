const toBase64 = btoa

const fromBase64 = atob

const toCaesarCipher = (str, shift) => {
    if (!str) {
        return ''
    }

    if (shift === undefined) {
        return {...Array.from({length: 26}, (_, i) => toCaesarCipher(str, i))}
    }

    if (shift === 0) {
        return str
    }

    if (shift < 0) {
        return toCaesarCipher(str, shift + Math.ceil(-shift / 26) * 26)
    }

    return str
        .split('')
        .map(char => {
            const code = char.charCodeAt(0)

            // Uppercase ASCII
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + shift) % 26) + 65)
            }

            // Lower case ASCII
            if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + shift) % 26) + 97)
            }

            return char
        })
        .join('')
}

const fromCaesarCipher = (str, shift) => {
    if (shift === undefined) {
        return {...Array.from({length: 26}, (_, i) => toCaesarCipher(str, 26 - i))}
    }
    return toCaesarCipher(str, -shift)
}

const count = (str, options) => {
    defaultOptions = {
        caseSensitive: false,
        pattern: /\p{Letter}/u,
    }

    const {caseSensitive, pattern} = {...defaultOptions, ...options}
    
    const counter = {}
    str.split('').forEach(char => {
        if (char.match(pattern)) {
            const key = caseSensitive ? char : char.toLowerCase()
            counter[key] = key in counter ? counter[key] + 1 : 1
        }
    })
    return counter
}

const isAnagram = (str1, str2) => {
    const counter1 = count(str1)
    const counter2 = count(str2)
    for (const key in counter1) {
        if (!(counter1[key] === counter2[key])) {
            return false
        }
    }
    return true
}

module.exports = {
    toBase64,
    fromBase64,
    toCaesarCipher,
    fromCaesarCipher,
    count,
    isAnagram,
}
