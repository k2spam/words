export const wordsFilter = (words, mask, exception) => {
    const filtered = words.filter(word => 
        mask.map((letter, num) => letter != "" ? word[num] == letter : true).includes(false) ? false : true
    )
    console.log(exception)
    console.log(filtered)
    return filtered
}