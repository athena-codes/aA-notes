// When DOM loads, prints msg to console

// window.onload = e => {
//   console.log('Window has loaded')
// }


// Better way to run program when DOM is loaded

window.addEventListener('DOMContentLoaded', async () => {
      // console.log('Window is loaded')
    let body = document.getElementById('body')

    // inline javascript styling -> adds to HTML in DOM
    body.style.backgroundColor = 'white'

    // returns HTML collection
    let h2sHTML = document.getElementsByTagName('h2')
    let h2sNode = document.querySelectorAll('.header')
    console.log(h2sHTML)
    console.log(h2sNode)

    // console.log(h2sNode.forEach((ele) => {
    //     // console.log(ele)
    // }))
    let playerName = document.getElementById('player-name')
    playerName.innerHTML = '<p> Player </p>'

    let playerScore = document.getElementById('player-score')
    playerScore.innerText = 0

    let cpuName = document.getElementById('cpu-name')
    cpuName.innerText = 'CPU'

    let cpuScore = document.getElementById('cpur-score')
    cpuScore.innerText = 0



  })
