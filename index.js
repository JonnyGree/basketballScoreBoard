let homeEl = document.getElementById("homeScore")
let guestEl = document.getElementById("guestScore")


let homeScore = 0
let guestScore = 0

function home1() {
    homeScore += 1
    homeEl.textContent = homeScore  
}

function homeone() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function home3() {
    homeScore += 3
    homeEl.textContent = homeScore
}

function guest1() {
    guestScore += 1
    guestEl.textContent = guestScore
}

function guest2() {
    guestScore += 2
    guestEl.textContent = guestScore
}

function guest3() {
    guestScore += 3
    guestEl.textContent = guestScore
}

