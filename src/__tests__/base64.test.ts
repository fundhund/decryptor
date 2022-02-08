import * as decryptor from '../index'

test('encrypts base 64', () => {
  const expected = 'SGVsbG8gd29ybGQ='
  const actual = decryptor.toBase64('Hello world')
  expect(actual).toBe(expected)
})

test('decrypts base 64', () => {
  const expected = 'Hello world'
  const actual = decryptor.fromBase64('SGVsbG8gd29ybGQ=')
  expect(actual).toBe(expected)
})
