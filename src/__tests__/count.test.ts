import * as decryptor from '../index'

describe('count', () => {
  test('counts characters correctly', () => {
    const expected = { d: 1, e: 1, h: 1, l: 3, o: 2, r: 1, w: 1 }
    const actual = decryptor.count('Hello world')
    expect(actual).toStrictEqual(expected)
  })

  test('uses regex pattern correctly', () => {
    const expected = { l: 3 }
    const actual = decryptor.count('Hello world', { pattern: /l/ })
    expect(actual).toStrictEqual(expected)
  })

  test('uses caseSensitive correctly', () => {
    const expected = { A: 3, a: 2 }
    const actual = decryptor.count('AAaAa', { caseSensitive: true })
    expect(actual).toStrictEqual(expected)
  })

  test('counts umlauts correctly', () => {
    const expected = { ä: 2, ö: 2, ü: 2 }
    const actual = decryptor.count('ÄäÖöÜü')
    expect(actual).toStrictEqual(expected)
  })
})

describe('isAnagram', () => {
  test('returns true for anagrams', () => {
    expect(decryptor.isAnagram('nameless', 'salesmen')).toBe(true)
  })

  test('returns false if no anagrams', () => {
    expect(decryptor.isAnagram('apple', 'banana')).toBe(false)
  })

  test('handles uppercase and lowercase correctly', () => {
    expect(decryptor.isAnagram('nAmElEsS', 'sAlEsMeN')).toBe(true)
  })

  test('handles umlauts correctly', () => {
    expect(decryptor.isAnagram('äöü', 'üöä')).toBe(true)
  })
})
