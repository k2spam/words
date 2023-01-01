export const wordsFilter = (words, mask, exception, includes) => {
    let filtered = words.filter(word => 
        mask.map((letter, num) => letter != "" ? word[num] == letter : true).includes(false) ? false : true
    )
    filtered = filtered.filter(word => 
        includes.map(letter => word.includes(letter)).includes(false) ? false : true || includes.length == 0
    )
    filtered = filtered.filter(word =>
        exception.map(letter => word.includes(letter)).includes(true) ? false : true
    )
    return filtered
}