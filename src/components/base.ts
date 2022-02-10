type Base = 2 | 4 | 8 | 16 | 32 | 64

const BASE_ALPHABETS = {
    64: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('')
}

export const fromBase64 = atob

export const toBase = (str: string, base: Base): string => {
    switch (base) {
        case 2:
        case 4:
        case 8:
        case 16:
        case 32:
            return ''
        case 64:
            return toBase64(str)
        default:
            return ''
    }
}

export const toBase64 = (str: string): any => {
    const bytes = str
        .split('')
        .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join('')

    const result = Array.from({ length: Math.ceil(bytes.length / 6) }, (_, i) =>
        bytes.substring(i * 6, i * 6 + 6).padEnd(6, '0'),
    )
        .map((binary) => BASE_ALPHABETS[64][parseInt(binary, 2)])
        .join('')

    return result.padEnd(Math.ceil(result.length / 4) * 4, '=')
}
