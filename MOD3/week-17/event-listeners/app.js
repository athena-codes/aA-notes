// DOM Manipulation

// Event Listeners

// alert when button is clicked in browser
const buttonTwo = document.querySelector('.btn-2')

function alertBtn() {
    alert("I also love Javascript!")
}

buttonTwo.addEventListener("click", alertBtn)


// Mouse Over Event

const newBackgroundColor = document.querySelector('.box-3')

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'purple'
}

newBackgroundColor.addEventListener('mouseover', changeBgColor)


const revealBtn = document.querySelector(".reveal-btn")
const hiddenContent = document.querySelector(".hidden-content")
console.log(hiddenContent)

function revealContent() {
    if (hiddenContent.classList.contains('reveal-btn')) {

        hiddenContent.classList.remove('reveal-btn')

    } else {
        hiddenContent.classList.add('reveal-btn')
    }
}

revealBtn.addEventListener('click', revealContent)
