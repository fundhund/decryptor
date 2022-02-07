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

    test('processes negative shift', () => {
        const expected = 'Gdkkn vnqkc'
        const actual = decryptor.toCaesarCipher('Hello world', -1)
        expect(actual).toBe(expected)
    })

    test('processes larger negative shift', () => {
        const expected = 'Gdkkn vnqkc'
        const actual = decryptor.toCaesarCipher('Hello world', -53)
        expect(actual).toBe(expected)
    })

    test('processes large shift', () => {
        const expected = 'Gdkkn vnqkc'
        const actual = decryptor.toCaesarCipher('Hello world', 285)
        expect(actual).toBe(expected)
    })

    test('encodes all shifts if no shift is given', () => {
        const expected = {
            '0': 'Hello world',
            '1': 'Ifmmp xpsme',
            '10': 'Rovvy gybvn',
            '11': 'Spwwz hzcwo',
            '12': 'Tqxxa iadxp',
            '13': 'Uryyb jbeyq',
            '14': 'Vszzc kcfzr',
            '15': 'Wtaad ldgas',
            '16': 'Xubbe mehbt',
            '17': 'Yvccf nficu',
            '18': 'Zwddg ogjdv',
            '19': 'Axeeh phkew',
            '2': 'Jgnnq yqtnf',
            '20': 'Byffi qilfx',
            '21': 'Czggj rjmgy',
            '22': 'Dahhk sknhz',
            '23': 'Ebiil tloia',
            '24': 'Fcjjm umpjb',
            '25': 'Gdkkn vnqkc',
            '3': 'Khoor zruog',
            '4': 'Lipps asvph',
            '5': 'Mjqqt btwqi',
            '6': 'Nkrru cuxrj',
            '7': 'Olssv dvysk',
            '8': 'Pmttw ewztl',
            '9': 'Qnuux fxaum',
        }
        const actual = decryptor.toCaesarCipher('Hello world')
        expect(actual).toStrictEqual(expected)
    })
})

describe('fromCaesarCipher', () => {

    test('decodes ROT-1', () => {
        const expected = 'Hello world'
        const actual = decryptor.fromCaesarCipher('Ifmmp xpsme', 1)
        expect(actual).toBe(expected)
    })

    test('brute forces if no shift is given', () => {
        const expected = {
            '0': 'Qnuux fxaum',
            '1': 'Pmttw ewztl',
            '2': 'Olssv dvysk',
            '3': 'Nkrru cuxrj',
            '4': 'Mjqqt btwqi',
            '5': 'Lipps asvph',
            '6': 'Khoor zruog',
            '7': 'Jgnnq yqtnf',
            '8': 'Ifmmp xpsme',
            '9': 'Hello world',
            '10': 'Gdkkn vnqkc',
            '11': 'Fcjjm umpjb',
            '12': 'Ebiil tloia',
            '13': 'Dahhk sknhz',
            '14': 'Czggj rjmgy',
            '15': 'Byffi qilfx',
            '16': 'Axeeh phkew',
            '17': 'Zwddg ogjdv',
            '18': 'Yvccf nficu',
            '19': 'Xubbe mehbt',
            '20': 'Wtaad ldgas',
            '21': 'Vszzc kcfzr',
            '22': 'Uryyb jbeyq',
            '23': 'Tqxxa iadxp',
            '24': 'Spwwz hzcwo',
            '25': 'Rovvy gybvn',
        }
        const actual = decryptor.fromCaesarCipher('Qnuux fxaum')
        expect(actual).toStrictEqual(expected)
    })
})
