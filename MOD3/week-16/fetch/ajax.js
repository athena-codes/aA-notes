const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const user = JSON.parse(xhr.responseText)

        console.log(user)
    }
}

xhr.open("GET", "user.json", true)
// prints user object to browser console
xhr.send()
