// let blob = "01100100 00001010 00010101 11101010 00010100"

// const binaryTranslation = blob => {
//     let split = blob.split(" ")

//     let mapped = split.map(letter => String.fromCharCode(parseInt(letter, 2)))
//     // use built in String.fromCharCode to take the binary blob and turn it into a letter
//     return mapped.join(" ")
// }

// console.log(binaryTranslation(blob))



let blob = "01101101 01111001 00100000 01110011 01110100 01110101 01100100 01100101 01101110 01110100 01110011 00100000 01100001 01110010 01100101 00100000 01100001 01110111 01100101 01110011 01101111 01101101 01100101"
                //Binary digit is 8 bits// 0b0000 0b0001
//Binary is also called Base 2

const binaryTranslation = blob => {
let split = blob.split(" ")


let mapped = split.map(letter => String.fromCharCode(parseInt(letter,2))) // we use the built in String.fromCharCode to take the binary blob and turn it into a letter
return mapped.join("")

}


let hexBlob = "6D 79 20 73 74 75 64 65 6E 74 73 20 61 72 65 20 74 68 65 20 62 65 73 74 21"
//Base 16 or hexadecimal  0x1  0xA

const hexTranslation = blob => {
    let split = blob.split(" ")


    let mapped = split.map(letter => String.fromCharCode(parseInt(letter,16)))
    return mapped.join("")

    }


console.log(hexTranslation(hexBlob))
