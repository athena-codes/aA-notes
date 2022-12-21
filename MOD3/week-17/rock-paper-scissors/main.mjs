// When DOM loads, prints msg to console

// window.onload = e => {
//   console.log('Window has loaded')
// }

// Better way to run program when DOM is loaded

window.addEventListener('DOMContentLoaded', async () => {
  let body = document.getElementById('body')

  body.style.backgroundColor = 'whitesmoke'

  // tageName = HTML collection, querySelector = nodeList
  // let h2sHTML = document.getElementsByTagName("h2")
  // let h2sNode = document.querySelectorAll(".header")
  // // console.log(h2sNode)
  // // console.log(h2sHTML)
  //     h2sNode.forEach(ele =>{

  // })

  let playerName = document.getElementById('player-name')
  playerName.innerHTML = '<p> Player </p>'

  let playerScore = document.getElementById('player-score')
  playerScore.innerText = 0

  let cpuScore = document.getElementById('cpu-score')
  cpuScore.innerText = 0

  let cpuName = document.getElementById('cpu-name')
  cpuName.innerText = 'CPU'

  let sepDiv = document.getElementById('seperation-div')
  sepDiv.style.backgroundColor = 'black'
    //     ele.innerText = "im a header8

  let newGame = document.getElementById('newgame-button')
  newGame.innerText = 'New Game'

  let reset = document.getElementById('reset-button')
  reset.innerText = 'Reset'

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

  const form = document.getElementById('form')
  playerName.innerText = localStorage.getItem('name')

  form.addEventListener('submit', e => {
    e.preventDefault()
    //  console.log(e.path[0][0].value)
    playerName.innerText = e.path[0][0].value
    localStorage.setItem('name', e.path[0][0].value)
    form.classList.add('hidden')
  })

  reset.addEventListener('click', e => {
    form.classList.remove('hidden')
    playerScore.innerText = 0
    cpuScore.innerText = 0
    localStorage.removeItem('name')
    playerName.innerText = ''
  })

  const imgDiv = document.getElementById('image-div')
  const divMain = document.getElementById('main')

  rock.addEventListener('click', e => {
    let container = document.createElement('div')
    let chosenImg = document.createElement('img')

    console.log(container.children)
    while (!container.hasAttribute('class', 'chosen')) {
      container.setAttribute('class', 'chosen')
      chosenImg.setAttribute('class', 'chosen-img')
      chosenImg.setAttribute('src', 'images/rock.jpeg')

      if (!imgDiv.hasAttribute('class', 'chosen')) {
        imgDiv.appendChild(container)
        container.appendChild(chosenImg)
      } else {
        imgDiv.remove(container)
      }
    }
  })

  paper.addEventListener('click', e => {
    let container = document.createElement('div')
    let chosenImg = document.createElement('img')
    container.setAttribute('class', 'chosen')
    imgDiv.appendChild(container)
    container.appendChild(chosenImg)
    chosenImg.setAttribute('class', 'chosen-img')
    chosenImg.setAttribute('src', 'images/paper.webp')
  })

  scissors.addEventListener('click', e => {
    let container = document.createElement('div')
    let chosenImg = document.createElement('img')
    container.setAttribute('class', 'chosen')
    imgDiv.appendChild(container)
    container.appendChild(chosenImg)
    chosenImg.setAttribute('class', 'chosen-img')
    chosenImg.setAttribute('src', 'images/scissors.jpeg')
  })
})
