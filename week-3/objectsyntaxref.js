// --takes in an object and returns an array of all the keys within that Object.

function keysInObject(obj) {
    let array = []
    for (let key in obj) {   // loop thru an object
        array.push(key)
    }
    return array
}


//--that takes in an object and returns an array of all the values within that Object.

function valuesInObject(obj) {
    let array = []
    for (key in obj) {
        let value = obj[key]  // create value variable
        array.push(value)
    }
    return array
}

//--return the object adding the second parameter as a key using the third parameter as its value.

function setKeyInObject(obj, string, value) {
    obj[string] = value       // obj with 'string' as key will equal value argument
    return obj
}


//--that takes in an person object and returns a string containing their full name.

function getFullName(person) {
    person.fullName = person.firstName + ' ' + person.lastName // dot notation to locate values
    return person.fullName
}


/*--takes in an object and a key and returns true if the key is inside the object and false if the
key is not inside the object */

function doesKeyExist(obj, key) {
    if (key in obj) {      // key in obj loops thru all keys inside the object, if statement to return boolean
        return true
    }
    return false
}

//--function will return `true` if any of the objects contains the`keyString` as a key within them, and`false` if not.

function keyInObjectArray(objArray, keyString) {
    let result = false

    objArray.forEach(function (obj) {
        if (obj[keyString] !== undefined) {
            result = true
        }
    })

    return result
}


/* --takes in an object as a parameter and returns an array containing:  all the keys from the object ** and ** all the
values of the object. */

function breakDownObj(obj) {
    let keys = Object.keys(obj);
    let values = Object.values(obj)

    return [...keys, ...values]
}

/* --takes in two objects and a key (string). The function should return an array containing the
corresponding values of the objects for the given key. */

function valuePair(obj1, obj2, key) {
    let val1 = obj1[key]        // bracket notataion to identify key of obj and array will include
    let val2 = obj2[key]       // values found at each
    let arr = [val1, val2]

    return arr
}
