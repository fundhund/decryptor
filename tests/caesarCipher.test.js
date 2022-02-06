const decryptor = require('@fundhund/decryptor')

describe('toCaesarCipher', () => {

    test('encodes ROT-0', () => {
        const expected = 'Hello world'
        const actual = decryptor.toCaesarCipher('Hello world', 0)
        expect(actual).toBe(expected)
    })

    test('encodes ROT-26', () => {
        const expected = 'Hello world'
        const actual = decryptor.toCaesarCipher('Hello world', 26)
        expect(actual).toBe(expected)
    })

    test('encodes ROT-1', () => {
        const expected = 'Ifmmp xpsme'
        const actual = decryptor.toCaesarCipher('Hello world', 1)
        expect(actual).toBe(expected)
    })
})

describe('fromCaesarCipher', () => {

    test('decodes ROT-1', () => {
        const expected = 'Hello world'
        const actual = decryptor.fromCaesarCipher('Ifmmp xpsme', 1)
        expect(actual).toBe(expected)
    })
})
