// When DOM loads, prints msg to console

// window.onload = e => {
//   console.log('Window has loaded')
// }


// Better way to run program when DOM is loaded

window.addEventListener("DOMContentLoaded",async ()=>{

    let body = document.getElementById("body")

    body.style.backgroundColor = "whitesmoke"

    // let h2sHTML = document.getElementsByTagName("h2")
    // let h2sNode = document.querySelectorAll(".header")
    // // console.log(h2sNode)
    // // console.log(h2sHTML)
    //     h2sNode.forEach(ele =>{
    //     ele.innerText = "im a header"

    // })
    let playerName = document.getElementById("player-name")
    let playerScore = document.getElementById("player-score")
    let cpuScore = document.getElementById("cpu-score")
    let cpuName = document.getElementById("cpu-name")
    let sepDiv = document.getElementById("seperation-div")
    sepDiv.style.backgroundColor = "black"
    playerName.innerHTML = "<p> Player </p>"
    playerScore.innerText = 0
    cpuScore.innerText = 0
    cpuName.innerText = "CPU"
    let newGame = document.getElementsById('newgame-button')
    let reset = document.getElementById('reset-button')
    newGame.innerText = "New Game"
    reset.innerText = "Reset"
    let img = documewnt.getElementById("rock")
    // can also do:
    img.setAttribute("src", "./images/rock.jpeg")
    let divMain = document.getElementById("main")
    let child = document.createElement('div')
    console.log(divMain.children)
    divMain.appendChild(child)
  })
