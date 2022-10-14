let blob = "01100100 00001010 00010101 11101010 00010100"

const binaryTranslation = blob => {
    let split = blob.split(" ")

    let mapped = split.map(letter => String.fromCharCode(parseInt(letter, 2)))
    // use built in String.fromCharCode to take the binary blob and turn it into a letter
    return mapped.join(" ")
}

console.log(binaryTranslation(blob))
