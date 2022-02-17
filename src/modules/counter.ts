export type CounterOptions = {
    caseSensitive?: boolean
    pattern?: RegExp
    resultType?: 'absolute' | 'relative'
}

export type Counter = {
    [key: string]: number
}

export const count = (str: string = '', options?: CounterOptions): Counter => {
    const defaultOptions = {
        caseSensitive: false,
        pattern: /\p{Letter}/gu,
        resultType: 'absolute',
    }
    const { caseSensitive, pattern, resultType } = { ...defaultOptions, ...options }

    const counter: Counter = {}
    const matches = str.match(pattern.global ? pattern : new RegExp(pattern.source, pattern.flags + 'g')) ?? []

    matches.forEach((char) => {
        const key = caseSensitive ? char : char.toLowerCase()
        counter[key] = key in counter ? counter[key] + 1 : 1
    })

    if (resultType === 'relative') {
        const sum = matches.length
        for (const key in counter) {
            counter[key] /= sum
        }
    }

    return counter
}

export const isAnagram = (str1: string = '', str2: string = ''): boolean => {
    const counter1 = count(str1)
    const counter2 = count(str2)
    for (const key in counter1) {
        if (!(counter1[key] === counter2[key])) {
            return false
        }
    }
    return true
}
