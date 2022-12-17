export const wordsFilter = (words, mask, exception) => {
    let filtered = words.filter(word => 
        mask.map((letter, num) => letter != "" ? word[num] == letter : true).includes(false) ? false : true
    )
    console.log(exception)
    filtered = filtered.filter(word =>
        exception.map(letter => word.includes(letter)).includes(true) ? false : true
    )
    console.log(exception)
    console.log(filtered)
    return filtered
}