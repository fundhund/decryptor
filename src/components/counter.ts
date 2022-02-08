export type CounterOptions = {
    caseSensitive?: boolean
    pattern?: RegExp
}

export type Counter = {
    [key: string]: number
}

export const count = (str: string = '', options?: CounterOptions): Counter => {
    const defaultOptions = {
        caseSensitive: false,
        pattern: /\p{Letter}/u,
    }

    const { caseSensitive, pattern } = { ...defaultOptions, ...options }

    const counter: Counter = {}
    str.split('').forEach((char) => {
        if (char.match(pattern)) {
            const key = caseSensitive ? char : char.toLowerCase()
            counter[key] = key in counter ? counter[key] + 1 : 1
        }
    })
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
