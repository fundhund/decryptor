import * as decryptor from '../index'

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
})
