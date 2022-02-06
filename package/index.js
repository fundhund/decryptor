const toBase64 = btoa

const fromBase64 = atob

const toCaesarCipher = (text, shift) => {
    if (!text) {
        return ''
    }

    if (shift === undefined) {
        return {...Array
            .from({length: 26}, (_, i) => i)
            .map(i => toCaesarCipher(text, i))}
    }

    if (shift === 0) {
        return text
    }

    if (shift < 0 || shift > 26) {
        return toCaesarCipher(text, (shift + Math.ceil(-shift / 26) * 26) % 26)
    }

    return text
        .split('')
        .map(char => {
            const code = char.charCodeAt(0)

            // Uppercase
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + shift) % 26) + 65)
            }

            // Lower case
            if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + shift) % 26) + 97)
            }

            return char
        })
        .join('')
}

const fromCaesarCipher = (text, shift) => {

    if (shift === undefined) {
        return {...Array
            .from({length: 26}, (_, i) => i)
            .map(i => toCaesarCipher(text, 26 - i))}
    }

    return toCaesarCipher(text, -shift)
}

module.exports = {
    toBase64,
    fromBase64,
    toCaesarCipher,
    fromCaesarCipher,
}
