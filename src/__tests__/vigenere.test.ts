import decryptor from '../index'

describe('toVigenereCipher', () => {
    test('returns plaintext with key "a"', () => {
        const expected = 'Hello world'
        const actual = decryptor.toVigenereCipher('Hello world', 'a')
        expect(actual).toBe(expected)
    })

    test('shifts plaintext by one position with key "b"', () => {
        const expected = 'Ifmmp xpsme'
        const actual = decryptor.toVigenereCipher('Hello world', 'b')
        expect(actual).toBe(expected)
    })

    test('works if key is shorter then plaintext', () => {
        const expected = 'Rijvs uyvjn'
        const actual = decryptor.toVigenereCipher('Hello world', 'key')
        expect(actual).toBe(expected)
    })

    test('ignores spaces in key', () => {
        const expected = decryptor.toVigenereCipher('Hello world', 'ab')
        const actual = decryptor.toVigenereCipher('Hello world', 'a b')
        expect(actual).toBe(expected)
    })

    test('ignores umlauts', () => {
        const expected = 'Rijvs uöbpb'
        const actual = decryptor.toVigenereCipher('Hello wörld', 'key')
        expect(actual).toBe(expected)
    })

    test('increments key after special characters and white spaces if set', () => {
        const expected = 'Rijvs göpvh'
        const actual = decryptor.toVigenereCipher('Hello wörld', 'key', { alwaysIncrementKey: true })
        expect(actual).toBe(expected)
    })
})

describe('fromVigenereCipher', () => {
    test('returns encoded text with key "a"', () => {
        const expected = 'Hello world'
        const actual = decryptor.fromVigenereCipher('Hello world', 'a')
        expect(actual).toBe(expected)
    })

    test('shifts encoded text by one position with key "b"', () => {
        const expected = 'Gdkkn vnqkc'
        const actual = decryptor.fromVigenereCipher('Hello world', 'b')
        expect(actual).toBe(expected)
    })

    test('works if key is shorter then plaintext', () => {
        const expected = 'Hello world'
        const actual = decryptor.fromVigenereCipher('Rijvs uyvjn', 'key')
        expect(actual).toBe(expected)
    })

    test('ignores spaces in key', () => {
        const expected = decryptor.fromVigenereCipher('Hello world', 'ab')
        const actual = decryptor.fromVigenereCipher('Hello world', 'a b')
        expect(actual).toBe(expected)
    })

    test('ignores umlauts', () => {
        const expected = 'Hello wörld'
        const actual = decryptor.fromVigenereCipher('Rijvs uöbpb', 'key')
        expect(actual).toBe(expected)
    })

    test('increments key after special characters and white spaces if set', () => {
        const expected = 'Hello wörld'
        const actual = decryptor.fromVigenereCipher('Rijvs göpvh', 'key', { alwaysIncrementKey: true })
        expect(actual).toBe(expected)
    })
})
