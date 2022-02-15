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

// const pw = [['H', 'h'], ['1', '!', 'I', 'i'], ['1', '2', '3']]
// console.log(interpolatePassword(pw))
