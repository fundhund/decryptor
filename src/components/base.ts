type Base = '2' | '4' | '8' | '16' | '32' | '32hex' | '64'

const getArray = (length: number): number[] => Array.from({ length }, (_, i) => i)

const BASE_ALPHABETS = {
    '2': getArray(2),
    '4': getArray(4),
    '8': getArray(8),
    '16': '0123456789ABCDEF'.split(''),
    '32': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'.split(''),
    '32hex': '0123456789ABCDEFGHIJKLMNOPQRSTUV'.split(''),
    '64': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('')
}

export const fromBase64 = atob

export const toBase = (str: string, base: Base): any => {
    const bytes = str
        .split('')
        .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join('')

    const chunkLength = Math.log(parseInt(base)) / Math.log(2)

    const result = Array.from({ length: Math.ceil(bytes.length / chunkLength) }, (_, i) =>
        bytes.substring(i * chunkLength, (i + 1) * chunkLength).padEnd(chunkLength, '0'),
    )
        .map((binary) => BASE_ALPHABETS[base][parseInt(binary, 2)])
        .join('')

    switch (base) {
        case '32':
        case '32hex':
            return result.padEnd(Math.ceil(result.length / 8) * 8, '=')
        case '64':
            return result.padEnd(Math.ceil(result.length / 4) * 4, '=')
        default:
            return result
    }
}

export const toBase2 = (str: string): string => toBase(str, '2')
export const toBase4 = (str: string): string => toBase(str, '4')
export const toBase8 = (str: string): string => toBase(str, '8')
export const toBase16 = (str: string): string => toBase(str, '16')
export const toBase32 = (str: string): string => toBase(str, '32')
export const toBase32hex = (str: string): string => toBase(str, '32hex')
export const toBase64 = (str: string): string => toBase(str, '64')
