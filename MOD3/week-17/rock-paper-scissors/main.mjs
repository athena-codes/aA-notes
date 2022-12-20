// When DOM loads, prints msg to console

// window.onload = e => {
//   console.log('Window has loaded')
// }

// Better way to run program when DOM is loaded

window.addEventListener("DOMContentLoaded",async ()=>{

    let body = document.getElementById("body")

    body.style.backgroundColor = "whitesmoke"

    // tageName = HTML collection, querySelector = nodeList
    // let h2sHTML = document.getElementsByTagName("h2")
    // let h2sNode = document.querySelectorAll(".header")
    // // console.log(h2sNode)
    // // console.log(h2sHTML)
    //     h2sNode.forEach(ele =>{
    //     ele.innerText = "im a header"

    // })

    let playerName = document.getElementById("player-name")
    playerName.innerHTML = "<p> Player </p>"

    let playerScore = document.getElementById("player-score")
    playerScore.innerText = 0

    let cpuScore = document.getElementById("cpu-score")
    cpuScore.innerText = 0

    let cpuName = document.getElementById("cpu-name")
    cpuName.innerText = "CPU"

    let sepDiv = document.getElementById("seperation-div")
    sepDiv.style.backgroundColor = "black"!

    let newGame = document.getElementById('newgame-button')
    newGame.innerText = "New Game"

    let reset = document.getElementById('reset-button')
    reset.innerText = "Reset"

// // how to set an attribute in JS for an image using id and setAttribute
//     let img = document.getElementById("rock")
//     img.setAttribute("src", "/images/rock./jpeg")

// // how to create a new element and append it to a container via id
//     let divMain = document.getElementById("main")
//     let child = document.createElement("div")

//     divMain.appendChild(child)
//     // prints HTML collection of all elements in main that are divs,
//     // including new empty div created (child)
//     console.log(divMain.children)
  })
