import { check } from "prettier"

export const interpolatePassword = (str: string[][]): string[] => {
    let result = ['']
    str.forEach(group => {
        const newPasswords: string[] = []
        group.forEach(char => {
            result.forEach(currentPassword => {
                newPasswords.push(`${currentPassword}${char}`)
            })
        })
        result = newPasswords
    })
    return result
}

export const getPasswordByInterpolation = async (
    str: string[][], 
    checkPassword: ((password: string) => Promise<boolean> | boolean)
): Promise<string | null> => {
    const candidates = interpolatePassword(str)
    for (const candidate of candidates) {
        if (await (checkPassword(candidate))) return candidate
    }
    return null
}

const pw = [['a', 'A'], ['b', 'B']]

const checkPassword = async (str: string): Promise<boolean> => str === 'Ab'

;(async () => {
    const realPassword = await getPasswordByInterpolation(pw, checkPassword)
    console.log(realPassword)
})()
